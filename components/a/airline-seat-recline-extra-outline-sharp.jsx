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
		"content": `<style>.g9x8k3bcj {
  fill: currentColor;
  d: path("M7.885 6.577q-.69 0-1.192-.501t-.5-1.191t.5-1.192t1.192-.5t1.191.5t.501 1.191t-.501 1.192t-1.191.501M6.44 19L4.039 7H5.05l2.2 11H14v1zm12.636 2.385L16.523 17H8.102l-1.425-6.796q-.217-1.027.466-1.75q.684-.723 1.596-.723q.701 0 1.289.419t.749 1.146L11.992 15h4.549l3.401 5.885z");
}
</style><path class="g9x8k3bcj"/>`,
		"fallback": "material-symbols-light:airline-seat-recline-extra-outline-sharp",
	});
}

export default Component;
