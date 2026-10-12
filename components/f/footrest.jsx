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

.n27cwl_-a {
  d: path("m4.36 13.35l15.28-2.7q.98-.17 1.15.82l.09.48q.17.99-.81 1.16L4.8 15.81q-.98.17-1.16-.81l-.08-.5q-.18-.98.8-1.15");
}

.snbmy388c {
  d: path("m7.07 12.87l8.63-1.52q.98-.17.82-1.04q-.15-.86-1.14-1.03L13.7 9q-.99-.17-1.83-.71l-1.46-.91q-.84-.54-1.82-.36l-2.47.43q-.98.18-.81 1.16l.61 3.45q.17.98 1.15.81m5.43 1.63v6.75m-4.75 0h9.5");
}
</style><g class="hntgybcog"><path class="n27cwl_-a"/><path class="snbmy388c"/></g>`,
		"fallback": "iconoven:footrest",
	});
}

export default Component;
