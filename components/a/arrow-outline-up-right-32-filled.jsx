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
		"content": `<style>.hyl_xnb5i {
  fill: currentColor;
  d: path("M9.969 29.125a3 3 0 0 0 4.242 0l6.904-6.904l1.749 1.75c2.122 2.12 5.755.763 5.966-2.23l1.167-16.53a3 3 0 0 0-3.204-3.203L10.26 3.175c-2.994.212-4.35 3.845-2.228 5.967L9.78 10.89l-6.9 6.902a3 3 0 0 0 0 4.243z");
}
</style><path class="hyl_xnb5i"/>`,
		"fallback": "fluent:arrow-outline-up-right-32-filled",
	});
}

export default Component;
