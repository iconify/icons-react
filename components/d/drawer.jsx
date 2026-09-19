import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsp_xm4zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsp_xm4zv"/>`,
		"fallback": "grommet-icons:drawer",
	});
}

export default Component;
