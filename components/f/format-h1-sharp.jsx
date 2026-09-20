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
		"content": `<style>.zs8l2q5kq {
  fill: currentColor;
  d: path("M6 16.5v-9h1v4h5v-4h1v9h-1v-4H7v4zm11 0v-8h-2v-1h3v9z");
}
</style><path class="zs8l2q5kq"/>`,
		"fallback": "material-symbols-light:format-h1-sharp",
	});
}

export default Component;
