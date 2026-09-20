import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk442cbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gk442cbho"/>`,
		"fallback": "solar:chef-hat-minimalistic-bold",
	});
}

export default Component;
