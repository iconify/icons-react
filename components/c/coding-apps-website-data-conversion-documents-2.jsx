import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcpv0fbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcpv0fbjf"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-data-conversion-documents-2",
	});
}

export default Component;
