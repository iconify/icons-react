import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpu7t4bcc.css';
import '../../css/z/zar1cn4so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpu7t4bcc"/><path class="zar1cn4so"/>`,
		"fallback": "boxicons:arrow-in-up-left-circle-filled",
	});
}

export default Component;
