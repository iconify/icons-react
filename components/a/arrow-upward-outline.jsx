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
		"content": `<style>.u3x8u_b-n {
  fill: currentColor;
  d: path("M11.5 19V6.921l-5.792 5.793L5 12l7-7l7 7l-.708.714L12.5 6.92V19z");
}
</style><path class="u3x8u_b-n"/>`,
		"fallback": "material-symbols-light:arrow-upward-outline",
	});
}

export default Component;
