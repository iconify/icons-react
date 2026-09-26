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
		"content": `<style>.e9ewmybae {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.leta_t4mj {
  d: path("M7.6975 12.1881L12 8L16.3025 12.1881M12 17L12 8.0852");
}
</style><g class="gp_8x1bzb"><path class="e9ewmybae"/><path class="leta_t4mj"/></g>`,
		"fallback": "keyline-icons:circle-arrow-up-sharp-duotone",
	});
}

export default Component;
