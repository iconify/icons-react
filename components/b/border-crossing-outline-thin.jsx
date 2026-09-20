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
		"content": `<style>.c438ceftc {
  d: path("M12 17v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxzk029nb {
  d: path("M12 10v4");
}

.n96aj2bbi {
  d: path("M4 12h15");
}

.q3srlnbfr {
  d: path("M12 2v5");
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="q3srlnbfr"/><path class="mxzk029nb"/><path class="c438ceftc"/><path class="n96aj2bbi"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:border-crossing-outline-thin",
	});
}

export default Component;
