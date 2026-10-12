import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx_ljtb_m.css';
import '../../css/z/za3i1qbft.css';
import '../../css/o/o5jhy_bpa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx_ljtb_m"/><path class="za3i1qbft"/><path class="o5jhy_bpa"/>`,
		"fallback": "energy-icons:flashlight-20-bold",
	});
}

export default Component;
