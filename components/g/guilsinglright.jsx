import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu3kytnrj.css';

const viewBox = {"width":516,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu3kytnrj"/>`,
		"fallback": "ls:guilsinglright",
	});
}

export default Component;
