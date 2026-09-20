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
		"content": `<style>.hewpuwg6v {
  fill: currentColor;
  d: path("M4 16.5v-9h1v4h5v-4h1v9h-1v-4H5v4zm14 0v-3h-5v-6h1v5h4v-5h1v5h2v1h-2v3z");
}
</style><path class="hewpuwg6v"/>`,
		"fallback": "material-symbols-light:format-h4-sharp",
	});
}

export default Component;
