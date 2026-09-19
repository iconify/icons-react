import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhjb5xbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhjb5xbwe"/>`,
		"fallback": "boxicons:heart-square-filled",
	});
}

export default Component;
