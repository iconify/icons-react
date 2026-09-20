import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvftmg39e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvftmg39e"/>`,
		"fallback": "oi:file",
	});
}

export default Component;
