import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ews521bjb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ews521bjb"/>`,
		"fallback": "f7:arrowtriangle-left",
	});
}

export default Component;
