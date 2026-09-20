import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coeb_wbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="coeb_wbxj"/>`,
		"fallback": "prime:indian-rupee",
	});
}

export default Component;
