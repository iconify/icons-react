import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qye3bdb8s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qye3bdb8s"/>`,
		"fallback": "fa7-brands:facebook-f",
	});
}

export default Component;
