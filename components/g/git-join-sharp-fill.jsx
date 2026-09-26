import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kw7_lt1xk {
  fill: currentColor;
  d: path("M5 1C7.0711 1 9 2.929 9 5C9 7.0711 7.0711 9 5 9C2.929 9 1 7.0711 1 5C1 2.929 2.929 1 5 1ZM19 1C21.0711 1 23 2.929 23 5C23 7.0711 21.0711 9 19 9C16.9289 9 15 7.0711 15 5C15 2.929 16.9289 1 19 1ZM12 15C14.0711 15 16 16.9289 16 19C16 21.0711 14.0711 23 12 23C9.9289 23 8 21.0711 8 19C8 16.9289 9.9289 15 12 15Z");
  stroke: none;
}

.on-iwezdh {
  d: path("M12 17L12 11M5 7L5 11L19 11L19 7");
}
</style><g class="gp_8x1bzb"><path class="on-iwezdh"/><path class="kw7_lt1xk"/></g>`,
		"fallback": "keyline-icons:git-join-sharp-fill",
	});
}

export default Component;
