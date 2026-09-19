import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxvmtd8dw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxvmtd8dw"/>`,
		"fallback": "academicons:coursera-square",
	});
}

export default Component;
