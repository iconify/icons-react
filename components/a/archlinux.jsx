import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz-2g9fdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz-2g9fdo"/>`,
		"fallback": "grommet-icons:archlinux",
	});
}

export default Component;
