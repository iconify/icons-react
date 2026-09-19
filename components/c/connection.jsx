import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvkixbcpd.css';
import '../../css/i/io4621_ab.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvkixbcpd"/><path class="io4621_ab"/>`,
		"fallback": "ep:connection",
	});
}

export default Component;
