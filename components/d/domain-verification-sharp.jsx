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
		"content": `<style>.q1bstcd_o {
  fill: currentColor;
  d: path("m10.95 16.55l5.65-5.65l-1.45-1.45l-4.2 4.2l-2.1-2.1L7.4 13zM4 8h16V6H4zM2 20V4h20v16z");
}
</style><path class="q1bstcd_o"/>`,
		"fallback": "material-symbols:domain-verification-sharp",
	});
}

export default Component;
