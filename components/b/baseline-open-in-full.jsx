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
		"content": `<style>.jvt2f9bfe {
  fill: currentColor;
  d: path("M21 11V3h-8l3.29 3.29l-10 10L3 13v8h8l-3.29-3.29l10-10z");
}
</style><path class="jvt2f9bfe"/>`,
		"fallback": "ic:baseline-open-in-full",
	});
}

export default Component;
