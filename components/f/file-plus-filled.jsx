import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdej6-b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdej6-b0b"/>`,
		"fallback": "boxicons:file-plus-filled",
	});
}

export default Component;
