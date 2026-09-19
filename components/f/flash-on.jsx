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
		"content": `<style>.k6ekypzqk {
  fill: currentColor;
  d: path("M7 2v11h3v9l7-12h-4l4-8z");
}
</style><path class="k6ekypzqk"/>`,
		"fallback": "ic:flash-on",
	});
}

export default Component;
