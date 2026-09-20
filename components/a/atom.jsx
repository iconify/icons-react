import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1j74k3mk.css';
import '../../css/g/gknbh0bsd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y1j74k3mk"/><path class="gknbh0bsd"/>`,
		"fallback": "thesvg-color:atom",
	});
}

export default Component;
