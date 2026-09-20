import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zdop9-bxj {
  fill: currentColor;
  d: path("m11.293 12l2.853 2.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l2.765 2.764A4.5 4.5 0 0 0 3.5 6.5v2.401l-.964 2.414A.5.5 0 0 0 3 12zm2.171-.685l.016.043l-8.336-8.335A4.5 4.5 0 0 1 12.5 6.5v2.401zM8 14.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5");
}
</style><path class="zdop9-bxj"/>`,
		"fallback": "fluent:alert-off-16-filled",
	});
}

export default Component;
