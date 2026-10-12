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
		"content": `<style>.bflixzf2l {
  d: path("m4.22 10.12l1.31-2.49Q6 6.75 7 6.75h10q1 0 1.47.88l1.31 2.49q.47.88-.53.88H4.75q-1 0-.53-.88");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyjhm5bmg {
  width: 13.5px;
  height: 2.75px;
  x: 5.25px;
  y: 16px;
  rx: 1px;
}

.udf2ji8xe {
  width: 18.5px;
  height: 7.75px;
  x: 2.75px;
  y: 13.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="bflixzf2l"/><rect class="udf2ji8xe"/><rect class="kyjhm5bmg"/></g>`,
		"fallback": "iconoven:ink-pad",
	});
}

export default Component;
