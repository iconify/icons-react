import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipx3pgbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipx3pgbfd"/>`,
		"fallback": "mono-icons:external-link",
	});
}

export default Component;
