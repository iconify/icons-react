import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q0sctib9c {
  fill: currentColor;
  d: path("M240 128c0 10.4-7.5 18.3-14.1 25.2c-3.8 3.9-7.7 8-9.2 11.5s-1.4 8.7-1.5 14c-.1 9.7-.3 20.8-8 28.5s-18.8 7.9-28.5 8c-5.3.1-10.7.2-14 1.5s-7.6 5.4-11.5 9.2c-6.9 6.6-14.8 14.1-25.2 14.1s-18.3-7.5-25.2-14.1c-3.9-3.8-8-7.7-11.5-9.2s-8.7-1.4-14-1.5c-9.7-.1-20.8-.3-28.5-8s-7.9-18.8-8-28.5c-.1-5.3-.2-10.7-1.5-14s-5.4-7.6-9.2-11.5C23.5 146.3 16 138.4 16 128s7.5-18.3 14.1-25.2c3.8-3.9 7.7-8 9.2-11.5s1.4-8.7 1.5-14c.1-9.7.3-20.8 8-28.5s18.8-7.9 28.5-8c5.3-.1 10.7-.2 14-1.5s7.6-5.4 11.5-9.2C109.7 23.5 117.6 16 128 16s18.3 7.5 25.2 14.1c3.9 3.8 8 7.7 11.5 9.2s8.7 1.4 14 1.5c9.7.1 20.8.3 28.5 8s7.9 18.8 8 28.5c.1 5.3.2 10.7 1.5 14s5.4 7.6 9.2 11.5c6.6 6.9 14.1 14.8 14.1 25.2Z");
}
</style><path class="q0sctib9c"/>`,
		"fallback": "ph:circle-wavy-fill",
	});
}

export default Component;
