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
		"content": `<style>.rmylhheap {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.75 2.75h-9.5q-2.5 0-2.5 2.5t2.5 2.5v8.5q-2.5 0-2.5 2.5t2.5 2.5h9.5q1.036 0 1.768-.732t.732-1.768t-.732-1.768t-1.768-.732v-8.5q1.036 0 1.768-.732t.732-1.768t-.732-1.768t-1.768-.732m-1.5 12.289l-6.5-1.625V11.02l6.5 2.031zm-6.5-.078v1.289h5.158zm0-5.512V7.75h6.5v3.73z");
}
</style><path class="rmylhheap"/>`,
		"fallback": "uix-solid:category-crafts",
	});
}

export default Component;
