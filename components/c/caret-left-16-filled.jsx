import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gv6nzr8kl {
  fill: currentColor;
  d: path("M9.428 11.84c.663.458 1.571-.013 1.571-.816V4.975c0-.803-.908-1.274-1.571-.816L5.644 6.776a1.486 1.486 0 0 0 0 2.447z");
}
</style><path class="gv6nzr8kl"/>`,
		"fallback": "fluent:caret-left-16-filled",
	});
}

export default Component;
