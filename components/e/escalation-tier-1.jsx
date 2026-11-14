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
		"content": `<style>.ca7ojiapc {
  fill: currentColor;
  d: path("M2.5 16.5h6v5h-6Z");
}

.eypwsxb4m {
  d: path("M8.5 21.5V12h6V7.5h6v14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6zjf47kh {
  d: path("M3.5 10.5L10 4M6.5 4H10v3.5");
}
</style><g class="ulnmmdpxh"><path class="eypwsxb4m"/><path class="ca7ojiapc"/><path class="v6zjf47kh"/></g>`,
		"fallback": "uix-sharp:escalation-tier-1",
	});
}

export default Component;
