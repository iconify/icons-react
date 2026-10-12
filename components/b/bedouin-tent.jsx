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
		"content": `<style>.gwvyao17c {
  d: path("m3.01 17.53l1.73-6.56Q5 10 5.78 9.37l2.44-1.99Q9 6.75 9.8 7.35l1.4 1.05q.8.6 1.6 0l1.4-1.05q.8-.6 1.58.03l2.44 1.99q.78.63 1.04 1.6l1.73 6.56q.26.97-.74.97H3.75q-1 0-.74-.97");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t8xxs2blo {
  d: path("m10.08 18.01l.84-5.27q.08-.49.58-.49h1q.5 0 .58.49l.84 5.27q.08.49-.42.49h-3q-.5 0-.42-.49m-7.33 3.24h18.5");
}
</style><g class="hntgybcog"><path class="gwvyao17c"/><path class="t8xxs2blo"/></g>`,
		"fallback": "iconoven:bedouin-tent",
	});
}

export default Component;
