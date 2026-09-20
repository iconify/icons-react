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
		"content": `<style>.on0ycjvjn {
  fill: currentColor;
  d: path("M5 17V7h2v4h4V7h2v10h-2v-4H7v4zm12 0V9h-2V7h4v10z");
}
</style><path class="on0ycjvjn"/>`,
		"fallback": "material-symbols:format-h1-sharp",
	});
}

export default Component;
