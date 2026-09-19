import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qap3ypbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qap3ypbjm"/>`,
		"fallback": "iconoir:arrow-union",
	});
}

export default Component;
