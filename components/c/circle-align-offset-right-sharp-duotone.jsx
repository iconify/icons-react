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
		"content": `<style>.bkcd5iben {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1C17.937 1 23 6.0629 23 12Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.watbwr0lo {
  d: path("M16 7L16 14M8 13L8 17M12 17L12 8");
}
</style><g class="gp_8x1bzb"><path class="bkcd5iben"/><path class="watbwr0lo"/></g>`,
		"fallback": "keyline-icons:circle-align-offset-right-sharp-duotone",
	});
}

export default Component;
