import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qclgze96h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qclgze96h"/>`,
		"fallback": "vadivam:chevrons-right-left",
	});
}

export default Component;
