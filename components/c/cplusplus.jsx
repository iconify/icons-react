import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glo50x2fl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glo50x2fl"/>`,
		"fallback": "cib:cplusplus",
	});
}

export default Component;
