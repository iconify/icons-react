import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cg-y-zb2l {
  fill: currentColor;
  d: path("M16 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M7.074 6.168a3.073 3.073 0 1 0-2 5.81l5.589 1.925a.5.5 0 0 1 .337.473v3.517a.5.5 0 0 1-.05.22L7.306 25.58a3.073 3.073 0 1 0 5.524 2.694l2.718-5.573a.5.5 0 0 1 .898 0l2.718 5.573a3.073 3.073 0 1 0 5.523-2.694l-3.637-7.458a.5.5 0 0 1-.051-.22v-3.526a.5.5 0 0 1 .337-.473l5.59-1.924a3.073 3.073 0 0 0-2-5.81l-2.975 1.023a2.1 2.1 0 0 0-1.14.972A5.5 5.5 0 0 1 16 11a5.5 5.5 0 0 1-4.813-2.836a2.1 2.1 0 0 0-1.14-.972z");
}
</style><path class="cg-y-zb2l"/>`,
		"fallback": "fluent:accessibility-32-filled",
	});
}

export default Component;
