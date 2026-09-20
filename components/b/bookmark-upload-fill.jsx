import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oldk_zc-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oldk_zc-d"/>`,
		"fallback": "mage:bookmark-upload-fill",
	});
}

export default Component;
