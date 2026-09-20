import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns_wucbxr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns_wucbxr"/>`,
		"fallback": "pinhead:bladder",
	});
}

export default Component;
