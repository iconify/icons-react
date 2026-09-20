import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jziryxb_h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jziryxb_h"/>`,
		"fallback": "medical-icon:accessibility",
	});
}

export default Component;
