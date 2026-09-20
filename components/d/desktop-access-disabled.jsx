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
		"content": `<style>.e-qh3_3su {
  fill: currentColor;
  d: path("M4.425 4.04v1.416L1.777 2.808l.708-.708l18.684 18.685l-.707.707L15.969 17H13v2h2v1H9v-1h2v-2H4.616q-.691 0-1.153-.462T3 15.385v-9.77q0-.713.463-1.144t.962-.43m15.64 12.809L7.216 4h12.17q.69 0 1.152.463T21 5.616v9.769q0 .496-.257.89t-.678.575");
}
</style><path class="e-qh3_3su"/>`,
		"fallback": "material-symbols-light:desktop-access-disabled",
	});
}

export default Component;
