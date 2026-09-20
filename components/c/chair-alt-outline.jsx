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
		"content": `<style>.glcm_abcr {
  fill: currentColor;
  d: path("M6.385 19.808v-5.962q0-.69.462-1.153T8 12.231h.885v-2.077H8q-.69 0-1.153-.463T6.384 8.54V6.192q0-.69.463-1.152T8 4.577h8q.69 0 1.153.463t.463 1.152V8.54q0 .69-.463 1.152T16 10.154h-.885v2.077H16q.69 0 1.153.462t.463 1.153v5.962h-1v-3H7.384v3zM8 9.154h8q.23 0 .423-.192q.193-.193.193-.423V6.192q0-.23-.193-.423q-.192-.192-.423-.192H8q-.23 0-.423.192t-.192.423v2.346q0 .231.192.423q.192.193.423.193m1.885 3.077h4.23v-2.077h-4.23zm-2.5 3.577h9.23v-1.962q0-.23-.192-.423T16 13.231H8q-.23 0-.423.192t-.192.423zm0-6.654V5.577zm0 6.654V13.23z");
}
</style><path class="glcm_abcr"/>`,
		"fallback": "material-symbols-light:chair-alt-outline",
	});
}

export default Component;
