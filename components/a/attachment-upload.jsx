import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrs2_fwzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrs2_fwzk"/>`,
		"fallback": "ix:attachment-upload",
	});
}

export default Component;
