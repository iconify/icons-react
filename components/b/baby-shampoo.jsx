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
		"content": `<style>.r4kyl5mxb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 5q0-3.25 3.25-3.25T20.5 5t-3.25 3.25T14 5m-3.75-.25h-1.5q-2.5 0-2.5 2.5v.5q0 .883.312 1.454q-.574.298-1.067.791Q4.25 11.24 4.25 13v5q0 1.76 1.245 3.005T8.5 22.25h2q1.76 0 3.005-1.245T14.75 18v-5q0-1.76-1.245-3.005q-.54-.541-1.178-.846q.423-.612.423-1.399v-.5q0-1.036-.732-1.768T10.25 4.75");
}
</style><path class="r4kyl5mxb"/>`,
		"fallback": "uix-solid:baby-shampoo",
	});
}

export default Component;
