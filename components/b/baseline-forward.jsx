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
		"content": `<style>.f8twl3rcu {
  fill: currentColor;
  d: path("M12 8V4l8 8l-8 8v-4H4V8z");
}
</style><path class="f8twl3rcu"/>`,
		"fallback": "ic:baseline-forward",
	});
}

export default Component;
