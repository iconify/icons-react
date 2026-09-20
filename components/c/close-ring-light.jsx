import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfsh_ybmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfsh_ybmd"/>`,
		"fallback": "lets-icons:close-ring-light",
	});
}

export default Component;
