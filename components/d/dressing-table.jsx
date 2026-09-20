import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaa-ttb4i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaa-ttb4i"/>`,
		"fallback": "streamline:dressing-table",
	});
}

export default Component;
