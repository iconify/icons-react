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
		"content": `<style>.fxy880l4b {
  fill: currentColor;
  d: path("M4 20V4h2v16zm14 0V4h2v16zM7.35 17L11.1 7h1.8l3.75 10h-1.725l-.9-2.55h-4.05l-.9 2.55zm3.15-4h3l-1.45-4.15h-.1z");
}
</style><path class="fxy880l4b"/>`,
		"fallback": "material-symbols:format-letter-spacing-standard-outline-sharp",
	});
}

export default Component;
