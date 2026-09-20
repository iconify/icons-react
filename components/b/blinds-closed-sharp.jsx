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
		"content": `<style>.kwm8weyso {
  fill: currentColor;
  d: path("M15 22.75q-.725 0-1.237-.513T13.25 21H2v-2h2V3h16v16h2v2h-5.25q0 .725-.513 1.238T15 22.75M6 7h8V5H6zm10 0h2V5h-2zM6 11h8V9H6zm10 0h2V9h-2zM6 15h8v-2H6zm10 0h2v-2h-2zM6 19h8v-2H6zm10 0h2v-2h-2z");
}
</style><path class="kwm8weyso"/>`,
		"fallback": "material-symbols:blinds-closed-sharp",
	});
}

export default Component;
