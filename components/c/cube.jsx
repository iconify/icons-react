import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq-i9lbxu.css';

const viewBox = {"width":960,"height":1007};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq-i9lbxu"/>`,
		"fallback": "whh:cube",
	});
}

export default Component;
