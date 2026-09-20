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
		"content": `<style>.q-5h-zb9r {
  fill: currentColor;
  d: path("M7.876 1.879a3 3 0 0 1 4.243 0l5.999 5.998a3 3 0 0 1 0 4.243l-5.999 5.998a3 3 0 0 1-4.243 0L1.878 12.12a3 3 0 0 1 0-4.243zm3.477 3.267a.5.5 0 0 0-.707.707L11.792 7H10a3 3 0 0 0-3 3v3a.5.5 0 0 0 1 0v-3a2 2 0 0 1 2-2h1.793l-1.146 1.146a.5.5 0 0 0 .707.707l2-2a.5.5 0 0 0 0-.707z");
}
</style><path class="q-5h-zb9r"/>`,
		"fallback": "fluent:directions-20-filled",
	});
}

export default Component;
