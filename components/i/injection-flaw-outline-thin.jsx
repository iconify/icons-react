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

.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.uhawluh-v {
  d: path("M6.5 9.5 9 12l-2.5 2.5");
}

.vc5bmsqzd {
  d: path("M5 12h4");
}
</style><g class="hntgybcog"><path class="iymet_cml"/><path class="vc5bmsqzd"/><path class="uhawluh-v"/><path class="ocmla0jdf"/></g>`,
		"fallback": "iconmind:injection-flaw-outline-thin",
	});
}

export default Component;
