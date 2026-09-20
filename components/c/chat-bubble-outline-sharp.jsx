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
		"content": `<style>.ftc1kcc1p {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="ftc1kcc1p"/>`,
		"fallback": "material-symbols:chat-bubble-outline-sharp",
	});
}

export default Component;
