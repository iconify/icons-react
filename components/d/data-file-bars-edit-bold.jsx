import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzh587b2u.css';
import '../../css/e/e8loo8vjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzh587b2u"/><path class="e8loo8vjx"/>`,
		"fallback": "streamline-ultimate:data-file-bars-edit-bold",
	});
}

export default Component;
