import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtpfbmb-o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtpfbmb-o"/>`,
		"fallback": "pinhead:deer-head-under-paragraph",
	});
}

export default Component;
