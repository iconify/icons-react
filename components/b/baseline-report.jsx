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
		"content": `<style>.felv4u99q {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3s1.3.58 1.3 1.3s-.58 1.3-1.3 1.3m1-4.3h-2V7h2z");
}
</style><path class="felv4u99q"/>`,
		"fallback": "ic:baseline-report",
	});
}

export default Component;
