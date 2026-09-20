import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw0cr8vxo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw0cr8vxo"/>`,
		"fallback": "qlementine-icons:folder-16",
	});
}

export default Component;
