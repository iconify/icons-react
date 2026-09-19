import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fib7x3egs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.001 31.5a7.5 7.5 0 0 1-6.495-3.75c-1.346-2.325-1.36-5.184 0-7.5A7.5 7.5 0 0 1 24 16.5");
}

.lmgrs9edp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.534 29.204a14.5 14.5 0 1 1-6.283-17.763");
}

.zud4wab8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.204 8.797C31.951 1.543 20.584.424 12.056 6.123S.212 22.75 4.137 32.227c3.926 9.476 13.998 14.86 24.058 12.859a21.5 21.5 0 0 0 17.306-21.087H23.754");
}
</style><path class="zud4wab8z"/><path class="lmgrs9edp"/><path class="fib7x3egs"/>`,
		"fallback": "arcticons:grammar-check",
	});
}

export default Component;
