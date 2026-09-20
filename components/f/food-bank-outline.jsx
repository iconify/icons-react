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
		"content": `<style>.i_k_9w64z {
  fill: currentColor;
  d: path("M10.308 17.346h.846v-3.384q.529 0 .899-.37t.37-.9v-2.538h-.846v2.538h-.423v-2.538h-.846v2.538h-.423v-2.538h-.846v2.538q0 .53.37.9t.899.37zm3.384 0h.847v-7.192q-.691 0-1.192.497q-.5.497-.5 1.195v2.539h.845zM5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75");
}
</style><path class="i_k_9w64z"/>`,
		"fallback": "material-symbols-light:food-bank-outline",
	});
}

export default Component;
