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
		"content": `<style>.r6mvk3giz {
  fill: currentColor;
  d: path("m14.95 22l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 12h16V8H4zm-2 8V4h20v8h-2.725l-4.325 4.325l-2.825-2.825l-4.25 4.25l.225.25v2z");
}
</style><path class="r6mvk3giz"/>`,
		"fallback": "material-symbols:credit-score-sharp",
	});
}

export default Component;
