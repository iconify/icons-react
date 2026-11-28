import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qets41bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qets41bxt"/>`,
		"fallback": "iconaut:copy-check-solid",
	});
}

export default Component;
