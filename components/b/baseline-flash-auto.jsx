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
		"content": `<style>.tumng3bww {
  fill: currentColor;
  d: path("M3 2v12h3v9l7-12H9l4-9zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.15 5.65L18 4l1.15 3.65z");
}
</style><path class="tumng3bww"/>`,
		"fallback": "ic:baseline-flash-auto",
	});
}

export default Component;
