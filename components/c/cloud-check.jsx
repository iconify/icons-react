import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzlg7-htb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzlg7-htb"/>`,
		"fallback": "tabler:cloud-check",
	});
}

export default Component;
