import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cim0r-4qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cim0r-4qu"/>`,
		"fallback": "eos-icons:edge-computing",
	});
}

export default Component;
