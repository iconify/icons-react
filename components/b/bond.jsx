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
		"content": `<style>.u-z7mpbfx {
  fill: var(--svg-color--ff4339, #ff4339);
  d: path("m8.5 17.476l-3.015 2.15A8.97 8.97 0 0 1 3 13.481v-.11a9 9 0 0 1 18 .005v.1a8.97 8.97 0 0 1-2.46 6.135l-3.04-2.155v-4.555l1.11-.82l-4.58-3.465l-4.58 3.465l1.05.82zm3.5-5.555h.075c1.36 0 2.5 1.005 2.42 2.28v2.55l-2.5-1.75L9.5 16.776v-2.575c0-1.28 1.135-2.28 2.5-2.28");
}
</style><path class="u-z7mpbfx"/>`,
		"fallback": "token-branded:bond",
	});
}

export default Component;
