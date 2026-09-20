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
		"content": `<style>.iotfljtfh {
  fill: currentColor;
  d: path("m7 15.6l4.008-5.811H7.677L9.35 4H4.385v8H7zm-1 3.246V13H3.385V3h7.288L9 8.789h3.904zM7 12H4.385zm7.567-1l3.51-9h.639l3.559 9h-.973l-1.03-2.608h-3.74L15.503 11zm2.262-3.408h3.134l-1.536-4.019h-.089z");
}
</style><path class="iotfljtfh"/>`,
		"fallback": "material-symbols-light:flash-auto-outline",
	});
}

export default Component;
