import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myk9rzcut.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myk9rzcut"/>`,
		"fallback": "medical-icon:dental",
	});
}

export default Component;
