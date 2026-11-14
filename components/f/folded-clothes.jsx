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
		"content": `<style>.rr2_eznqp {
  d: path("M3.5 4.5h17v16h-17Zm0 6h17m-17 5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwjedjblj {
  d: path("m9 4.5l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="rr2_eznqp"/><path class="zwjedjblj"/></g>`,
		"fallback": "uix-sharp:folded-clothes",
	});
}

export default Component;
