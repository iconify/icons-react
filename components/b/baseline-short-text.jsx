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
		"content": `<style>.gnyzqsw2h {
  fill: currentColor;
  d: path("M4 9h16v2H4zm0 4h10v2H4z");
}
</style><path class="gnyzqsw2h"/>`,
		"fallback": "ic:baseline-short-text",
	});
}

export default Component;
