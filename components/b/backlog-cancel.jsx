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
		"content": `<style>.lwe0vobvu {
  d: path("M16.5 20.4v.1h-14V9h2.6m7.8 0h3.6v3.6");
}

.oztzrc8hw {
  d: path("M10.15 6.25h7.1q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132q.07.069.132.145t.117.158t.101.168q.046.087.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194t.01.196v7.072");
}

.tzyxxwbzx {
  d: path("M8 3.5h12a2 2 0 0 1 2 2V15M3.5 3.5l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lwe0vobvu"/><path class="oztzrc8hw"/><path class="tzyxxwbzx"/></g>`,
		"fallback": "uix-sharp:backlog-cancel",
	});
}

export default Component;
