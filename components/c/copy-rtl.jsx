import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mso5wcbws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mso5wcbws"/>`,
		"fallback": "ooui:copy-rtl",
	});
}

export default Component;
