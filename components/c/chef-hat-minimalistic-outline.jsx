import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxc-7ebru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxc-7ebru"/>`,
		"fallback": "solar:chef-hat-minimalistic-outline",
	});
}

export default Component;
