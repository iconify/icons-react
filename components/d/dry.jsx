import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-a69bgb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-a69bgb"/>`,
		"fallback": "picon:dry",
	});
}

export default Component;
