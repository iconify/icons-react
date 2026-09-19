import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9i8cn5gg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9i8cn5gg"/>`,
		"fallback": "carbon:ibm-api-connect",
	});
}

export default Component;
