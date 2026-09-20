import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvx4y13re.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvx4y13re"/>`,
		"fallback": "la:cc-jcb",
	});
}

export default Component;
