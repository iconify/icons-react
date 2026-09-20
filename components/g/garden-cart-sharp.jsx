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
		"content": `<style>.s2ew4ac4c {
  fill: currentColor;
  d: path("M12.225 15.45L8.525 21H5V9.4L3.175 5H1V3h3.525l1.65 4H22.6L19 14.025q1.275.2 2.138 1.175T22 17.5q0 1.45-1.012 2.475T18.525 21q-1.475 0-2.487-1.025T15.025 17.5q0-.5.125-.925t.35-.825zM7 18.975h.475l2.5-3.725l-2.65-.25L7 14.225zM18.5 19q.65 0 1.075-.437T20 17.5q0-.65-.425-1.075T18.5 16q-.625 0-1.062.425T17 17.5q0 .625.438 1.063T18.5 19");
}
</style><path class="s2ew4ac4c"/>`,
		"fallback": "material-symbols:garden-cart-sharp",
	});
}

export default Component;
