import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvzp0ac7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvzp0ac7e"/>`,
		"fallback": "tabler:box-align-top-right-filled",
	});
}

export default Component;
