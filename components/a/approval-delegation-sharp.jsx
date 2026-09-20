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
		"content": `<style>.zncnxnbyx {
  fill: currentColor;
  d: path("M13.925 11.05L9.675 6.8L11.1 5.4l2.825 2.825l5.675-5.65l1.4 1.4zM2 22V11h4v11zm13 0l-7-1.975V11h1.975L18 14v2h-4l-1.75-.675l-.35.925L14 17h9v2z");
}
</style><path class="zncnxnbyx"/>`,
		"fallback": "material-symbols:approval-delegation-sharp",
	});
}

export default Component;
