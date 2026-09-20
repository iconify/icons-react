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
		"content": `<style>.bzw2v0c9x {
  d: path("M7.237 4.368a8.992 8.992 0 0 0 0 15.264zm3.175 16.492a9 9 0 0 0 3.176 0v-6.67l-3.176.407zm6.351-1.228a8.992 8.992 0 0 0 0-15.264zM13.588 3.14v7.88l-3.176.45V3.14a9 9 0 0 1 3.176 0");
}
</style><path class="bzw2v0c9x"/>`,
		"fallback": "token-branded:hello",
	});
}

export default Component;
