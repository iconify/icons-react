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
		"content": `<style>.j9bsnkb7k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.384 20.313q3.993 2.426 8.36.573q4.527-1.922 5.465-6.75T18.67 5.83q-3.478-3.477-8.306-2.539t-6.75 5.465q-1.853 4.367.573 8.36l-.908 3.178q-.059.206 0 .412q.02.071.054.137q.034.065.08.123t.102.106t.121.084q.064.035.135.058q.07.023.143.031q.074.009.147.002q.074-.006.145-.026zm8.682-12.88l.001.001q.512.512.512 1.238q0 .725-.513 1.238l-4.983 4.981q-.481.482-1.149.615l-.439.088q-.709.142-1.22-.369t-.369-1.22l.088-.439q.133-.668.615-1.149l4.982-4.983q.512-.513 1.238-.513q.725 0 1.237.512");
}
</style><path class="j9bsnkb7k"/>`,
		"fallback": "uix-solid:comment-edit",
	});
}

export default Component;
