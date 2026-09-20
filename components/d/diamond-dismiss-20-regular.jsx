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
		"content": `<style>.t_s006f3r {
  fill: currentColor;
  d: path("M7.876 1.877a3 3 0 0 1 4.243 0l5.999 6a3 3 0 0 1 0 4.242l-5.999 5.999a3 3 0 0 1-4.243 0l-5.998-6a3 3 0 0 1 0-4.242zm3.536.707a2 2 0 0 0-2.829 0l-5.998 6a2 2 0 0 0 0 2.828l5.998 5.999c.781.78 2.048.78 2.83 0l5.997-6a2 2 0 0 0 0-2.828zm.985 4.313a.5.5 0 1 1 .707.707L10.707 10l2.397 2.397a.5.5 0 0 1-.707.707L10 10.707l-2.396 2.397a.5.5 0 0 1-.707-.707L9.293 10L6.897 7.604a.5.5 0 0 1 .707-.707L10 9.293z");
}
</style><path class="t_s006f3r"/>`,
		"fallback": "fluent:diamond-dismiss-20-regular",
	});
}

export default Component;
