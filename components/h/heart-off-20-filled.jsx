import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bdcmzoysj {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l1.271 1.27a4 4 0 0 0-.156.15c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0l2.787-2.813l3.863 3.864a.5.5 0 0 0 .708-.708zM16.74 10.5l-2.05 2.07l-9.438-9.437A4.32 4.32 0 0 1 9.388 4.29l.605.61l.596-.603a4.305 4.305 0 0 1 6.135.015a4.41 4.41 0 0 1 .017 6.187");
}
</style><path class="bdcmzoysj"/>`,
		"fallback": "fluent:heart-off-20-filled",
	});
}

export default Component;
