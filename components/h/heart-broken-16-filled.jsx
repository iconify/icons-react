import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.elemeb0rl {
  fill: currentColor;
  d: path("M7.354 3.775a3.25 3.25 0 0 0-4.408.161a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.25 3.25 0 0 0-4.601-.012l-.028.028L7.16 5.903l2.162 1.825a.5.5 0 0 1 .032.736l-1.5 1.5a.5.5 0 0 1-.708-.707L8.262 8.14L6.178 6.382a.5.5 0 0 1-.097-.655z");
}
</style><path class="elemeb0rl"/>`,
		"fallback": "fluent:heart-broken-16-filled",
	});
}

export default Component;
