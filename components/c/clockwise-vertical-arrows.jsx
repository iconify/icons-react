import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i143i8nkz {
  d: path("M66.03 107.58c-.76.09-1.53.16-2.32.16c-10.9 0-19.77-8.87-19.77-19.77v-53.4H61.8L39.29 6.72l-22.5 27.85h16.69v53.4c0 16.67 13.56 30.24 30.24 30.24c3.37 0 6.69-.57 9.89-1.69z");
}

.wxro2xbgs {
  d: path("M61.97 20.41c.76-.1 1.53-.15 2.32-.15c10.9 0 19.78 8.88 19.78 19.78v53.4H66.2l22.51 27.85l22.5-27.85H94.53v-53.4c0-16.68-13.57-30.24-30.24-30.24c-3.36 0-6.68.56-9.89 1.68z");
}

.y94jm1b4c {
  fill: var(--svg-color--40c0e7, #40c0e7);
}
</style><g class="y94jm1b4c"><path class="i143i8nkz"/><path class="wxro2xbgs"/></g>`,
		"fallback": "noto-v1:clockwise-vertical-arrows",
	});
}

export default Component;
