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
		"content": `<style>.ae6wlvxut {
  fill: currentColor;
  d: path("M22 5.025q0-1.275-.875-2.15T18.975 2V.5q1.875 0 3.2 1.325t1.325 3.2zM6 23q-2.075 0-3.537-1.463T1 18h1.5q0 1.45 1.025 2.475T6 21.5zm2.475 0L1.2 12.375l1.725-1.65L7 13.575V3h2v14.425l-3.7-2.6L9.525 21H19V4h2v19zM11 12V1h2v11zm4 0V2h2v10zm-2 4.5");
}
</style><path class="ae6wlvxut"/>`,
		"fallback": "material-symbols:hand-gesture-outline-sharp",
	});
}

export default Component;
