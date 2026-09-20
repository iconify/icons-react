import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl6_mcbxf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl6_mcbxf"/>`,
		"fallback": "picon:girl",
	});
}

export default Component;
