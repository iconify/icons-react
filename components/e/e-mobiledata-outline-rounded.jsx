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
		"content": `<style>.np8th6blo {
  fill: currentColor;
  d: path("M9 17q-.213 0-.356-.144T8.5 16.5v-9q0-.213.144-.356T9 7h6q.213 0 .356.144t.144.357t-.144.356T15 8H9.5v3.5H15q.213 0 .356.144t.144.357t-.144.356T15 12.5H9.5V16H15q.213 0 .356.144t.144.357t-.144.356T15 17z");
}
</style><path class="np8th6blo"/>`,
		"fallback": "material-symbols-light:e-mobiledata-outline-rounded",
	});
}

export default Component;
