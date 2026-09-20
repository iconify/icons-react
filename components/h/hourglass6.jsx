import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1x6-acbx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1x6-acbx"/>`,
		"fallback": "picon:hourglass6",
	});
}

export default Component;
