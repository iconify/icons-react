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
		"content": `<style>.g1oqy_-_m {
  d: path("M4.75 18.75V5.25a2.5 2.5 0 0 1 2.5-2.5h10a2 2 0 0 1 2 2v11.5H6.75a2 2 0 0 0-2 2Zm0 0a2.5 2.5 0 0 0 2.5 2.5h12v-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pw_u43c3e {
  cx: 12px;
  cy: 9.75px;
  r: 3.5px;
}

.yycu1e_9d {
  d: path("M12 9.5v2m0-3.75v.01");
}
</style><g class="hntgybcog"><path class="g1oqy_-_m"/><circle class="pw_u43c3e"/><path class="yycu1e_9d"/></g>`,
		"fallback": "iconoven:handbook",
	});
}

export default Component;
