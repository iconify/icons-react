import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaebx0bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaebx0bsv"/>`,
		"fallback": "selfhst:agam-space-light",
	});
}

export default Component;
