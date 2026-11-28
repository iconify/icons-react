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

.jb3959bwr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z");
  stroke: none;
}

.vtb1sfk9d {
  d: path("M11 7H9V11L8 12L9 13V17H11M13 7H15V11L16 12L15 13V17H13");
}
</style><g class="gp_8x1bzb"><path class="jb3959bwr"/><path class="vtb1sfk9d"/></g>`,
		"fallback": "keyline-icons:circle-braces-sharp-duotone",
	});
}

export default Component;
