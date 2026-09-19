import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc9wkibkf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc9wkibkf"/>`,
		"fallback": "f7:forward-end-alt-fill",
	});
}

export default Component;
