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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i73ntcgit {
  cx: 12px;
  cy: 17.5px;
  r: 1.25px;
}

.on1_5v0ta {
  d: path("M6.25 13h11.5a2.5 2.5 0 0 0 1.15-4.7a3 3 0 0 0-3.4-2.4a3.75 3.75 0 0 0-7 0a3 3 0 0 0-3.4 2.4A2.5 2.5 0 0 0 6.25 13m-.83 3a6.75 6.75 0 0 0 13.16 0M12 18.75v2.5");
}
</style><g class="hntgybcog"><path class="on1_5v0ta"/><circle class="i73ntcgit"/></g>`,
		"fallback": "iconoven:airbag",
	});
}

export default Component;
