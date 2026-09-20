import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxbt_k8yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxbt_k8yr"/>`,
		"fallback": "mdi:cloud-arrow-left",
	});
}

export default Component;
