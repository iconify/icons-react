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
		"content": `<style>.lq1ub8bof {
  fill: currentColor;
  d: path("M11.5 21V3h1v18zm3.23-4.5v-9h2v9zm-7.46 0v-9h2v9z");
}
</style><path class="lq1ub8bof"/>`,
		"fallback": "material-symbols-light:align-justify-center",
	});
}

export default Component;
