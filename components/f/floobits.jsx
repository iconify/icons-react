import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg9bewbfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg9bewbfy"/>`,
		"fallback": "file-icons:floobits",
	});
}

export default Component;
