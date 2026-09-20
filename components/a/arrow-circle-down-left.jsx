import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjeg9vz7v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjeg9vz7v"/>`,
		"fallback": "jam:arrow-circle-down-left",
	});
}

export default Component;
