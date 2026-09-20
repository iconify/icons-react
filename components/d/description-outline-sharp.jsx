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
		"content": `<style>.pphr1ibjh {
  fill: currentColor;
  d: path("M8.5 17.5h7v-1h-7zm0-4h7v-1h-7zM5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z");
}
</style><path class="pphr1ibjh"/>`,
		"fallback": "material-symbols-light:description-outline-sharp",
	});
}

export default Component;
