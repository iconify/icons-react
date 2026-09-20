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
		"content": `<style>.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.l01wrb87q {
  d: path("M7 10.5h10");
}

.la-twzbff {
  d: path("M12 12.5v6");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="hntgybcog"><path class="edllzuogn"/><path class="iaozfqbuj"/><path class="l01wrb87q"/><path class="la-twzbff"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:database-add-duotone-thin",
	});
}

export default Component;
