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
		"content": `<style>.ko9t8y8rs {
  fill: currentColor;
  d: path("M13 21v-8h8v8zm0-10V3h8v8zM3 11V3h8v8zm0 10v-8h8v8z");
}
</style><path class="ko9t8y8rs"/>`,
		"fallback": "material-symbols:border-all-sharp",
	});
}

export default Component;
