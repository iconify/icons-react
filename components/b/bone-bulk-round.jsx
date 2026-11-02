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
		"content": `<style>.c4kl7kb8b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m17.707 10.707l-7 7l-.01.011c.023.089.055.175.086.262c.117.33.217.666.217 1.02a3 3 0 1 1-6 0a3 3 0 1 1 0-6c.354 0 .69.1 1.02.217c.087.031.173.063.262.086l.011-.01l7-7l.01-.011c-.023-.089-.055-.175-.086-.262C13.1 5.69 13 5.354 13 5a3 3 0 1 1 6 0a3 3 0 1 1 0 6c-.354 0-.69-.1-1.02-.217c-.087-.031-.173-.063-.262-.086z");
}
</style><path class="c4kl7kb8b"/>`,
		"fallback": "coolicons:bone-bulk-round",
	});
}

export default Component;
