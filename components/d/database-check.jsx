import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrg1gybxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrg1gybxf"/>`,
		"fallback": "mdi:database-check",
	});
}

export default Component;
