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
		"content": `<style>.vzeu7kbcj {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-1-.999A3 3 0 0 1 19 22H5a3 3 0 0 1-2.975-2.611L10 11.414L8.586 10L2 16.586V5c0-.448.099-.889.292-1.293l-.999-1a.999.999 0 1 1 1.414-1.414M22 17.757L6.243 2H19a3 3 0 0 1 3 3ZM14.158 7.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558");
}
</style><path class="vzeu7kbcj"/>`,
		"fallback": "coolicons:image-off-fill",
	});
}

export default Component;
