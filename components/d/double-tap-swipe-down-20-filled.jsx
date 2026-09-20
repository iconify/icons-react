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
		"content": `<style>.q7w_xzblb {
  fill: currentColor;
  d: path("M10.53 17.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V7.75a.75.75 0 1 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM4.25 7.5a5.75 5.75 0 0 0 4 5.479v-1.605a4.25 4.25 0 1 1 3.5 0v1.605A5.75 5.75 0 1 0 4.25 7.5m2.5 0a3.25 3.25 0 0 0 1.5 2.74V7.75q0-.063.004-.125a1.785 1.785 0 0 1 3.496.125v2.49a3.25 3.25 0 1 0-5-2.74");
}
</style><path class="q7w_xzblb"/>`,
		"fallback": "fluent:double-tap-swipe-down-20-filled",
	});
}

export default Component;
