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
		"content": `<style>.zz883kx8p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.22 9.22l5-5q.054-.055.119-.097q2.721-1.785 5.022.516t.516 5.022q-.042.065-.097.119l-5 5l-5 5q-.054.055-.119.097q-2.721 1.785-5.022-.516t-.516-5.022q.042-.065.097-.119z");
}
</style><path class="zz883kx8p"/>`,
		"fallback": "uix-solid:capsule-split",
	});
}

export default Component;
