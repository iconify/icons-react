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

.nynzlpb7q {
  d: path("M14.75 15.25v5c0 .75 1.5 1.25 3.25 1.25s3.25-.5 3.25-1.25v-5");
}

.xh0r0fzmu {
  d: path("M4.25 3h15.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 19.75 8H4.25A1.75 1.75 0 0 1 2.5 6.25v-1.5A1.75 1.75 0 0 1 4.25 3M4 8v11q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T6 21h5.972M20 11.357V8M9.5 11.5h5m.25 3.75a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="xh0r0fzmu"/><path class="nynzlpb7q"/></g>`,
		"fallback": "uix:data-archive",
	});
}

export default Component;
