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
		"content": `<style>.ksh02ccjh {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm17.775.925L20 17.15V8h-9.15l-4-4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437M18 15.15L12.85 10H18z");
}
</style><path class="ksh02ccjh"/>`,
		"fallback": "material-symbols:iframe-off",
	});
}

export default Component;
