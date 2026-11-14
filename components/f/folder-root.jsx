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
		"content": `<style>.rk1ftnanx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 3.25Q2.25 3.25 2.25 6v12q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V8q0-2.75-2.75-2.75h-7.189L10.03 3.47q-.105-.106-.243-.163T9.5 3.25zm3.018 8.238l2.5-2.188q1.482-1.298 2.964 0l2.5 2.188q.768.672.768 1.693V15.5q0 2.25-2.25 2.25h-5q-2.25 0-2.25-2.25v-2.319q0-1.021.768-1.693");
}
</style><path class="rk1ftnanx"/>`,
		"fallback": "uix-solid:folder-root",
	});
}

export default Component;
