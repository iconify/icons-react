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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t71gvpbqs {
  d: path("M12 7.25V12l-3 2m4.75 4.25h3m-1.5-1.5v3m4.25-3.5l1.25-1v6");
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="t71gvpbqs"/></g>`,
		"fallback": "iconoven:daylight-saving",
	});
}

export default Component;
