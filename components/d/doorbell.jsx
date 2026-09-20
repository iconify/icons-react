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
		"content": `<style>.t3f_w9waw {
  fill: currentColor;
  d: path("M12.626 16.991q.259-.239.297-.606h-1.846q.039.367.297.606q.259.24.626.24t.626-.24m-4.318-1.106h7.384v-.77h-1v-2.273q0-1.061-.532-1.933q-.533-.87-1.525-1.14v-.327q0-.267-.184-.45q-.184-.184-.451-.184t-.451.183t-.183.451v.327q-.993.27-1.526 1.14q-.532.872-.532 1.933v2.274h-1zM5 20V9.5l7-5.27l7 5.27V20z");
}
</style><path class="t3f_w9waw"/>`,
		"fallback": "material-symbols-light:doorbell",
	});
}

export default Component;
