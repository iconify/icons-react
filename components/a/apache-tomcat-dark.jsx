import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yur3l-b2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yur3l-b2x"/>`,
		"fallback": "selfhst:apache-tomcat-dark",
	});
}

export default Component;
