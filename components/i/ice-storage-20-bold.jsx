import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_3l1bkn.css';
import '../../css/i/ij10vk6wc.css';
import '../../css/x/xa0ui5bez.css';
import '../../css/y/yw0epjfyt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp_3l1bkn"/><path class="ij10vk6wc"/><path class="xa0ui5bez"/><path class="yw0epjfyt"/>`,
		"fallback": "energy-icons:ice-storage-20-bold",
	});
}

export default Component;
