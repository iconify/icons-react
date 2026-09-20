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
		"content": `<style>.fwwa_5bzm {
  fill: currentColor;
  d: path("M10.346 13q-.343 0-.575-.232t-.232-.576V9.04q0-.441.299-.74t.739-.3h6.885q1.237 0 2.118.881T20.462 11v1.192q0 .343-.233.576t-.575.232zm9.616 2.77H4.039q-.213 0-.357-.145t-.144-.357t.144-.356t.356-.143h15.923q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143M4.145 12.394q-.606-.606-.606-1.51q0-.903.606-1.509t1.51-.606t1.51.606t.605 1.51t-.606 1.51T5.653 13t-1.509-.606");
}
</style><path class="fwwa_5bzm"/>`,
		"fallback": "material-symbols-light:airline-seat-flat-rounded",
	});
}

export default Component;
