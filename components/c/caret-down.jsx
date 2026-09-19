import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmrc8zbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmrc8zbxd"/>`,
		"fallback": "grommet-icons:caret-down",
	});
}

export default Component;
