import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.femcarbuu {
  d: path("M10 14a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.nmlij9bln {
  d: path("M5.232 11.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}

.ym28i0ipj {
  d: path("M14.768 11.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ym28i0ipj"/><path class="nmlij9bln"/><path class="femcarbuu"/></g>`,
		"fallback": "pepicons-pop:arrow-down",
	});
}

export default Component;
