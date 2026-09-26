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

.oup9fib8n {
  fill: currentColor;
  d: path("M12 8C14.0711 8 16 9.9289 16 12C16 14.0711 14.0711 16 12 16C9.9289 16 8 14.0711 8 12C8 9.9289 9.9289 8 12 8Z");
  stroke: none;
}

.pryvobccz {
  d: path("M12 10L12 2M12 22L12 14");
}
</style><g class="gp_8x1bzb"><path class="pryvobccz"/><path class="oup9fib8n"/></g>`,
		"fallback": "keyline-icons:git-commit-vertical-sharp-fill",
	});
}

export default Component;
