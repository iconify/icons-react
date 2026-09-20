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
		"content": `<style>.f98ppfb3v {
  fill: currentColor;
  d: path("M11.5 14.077v-8h1v8zm0 3.846v-1h1v1z");
}
</style><path class="f98ppfb3v"/>`,
		"fallback": "material-symbols-light:exclamation-outline",
	});
}

export default Component;
