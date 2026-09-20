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
		"content": `<style>.lm388-wer {
  fill: currentColor;
  d: path("M6.23 16.77h1.54v-1.54H6.23zm.27-3h1V7.5h-1zm5 2.73h6v-1h-6zm0-4h6v-1h-6zm0-4h6v-1h-6zM3 20V4h18v16z");
}
</style><path class="lm388-wer"/>`,
		"fallback": "material-symbols-light:breaking-news-sharp",
	});
}

export default Component;
