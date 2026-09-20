import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyrk-tbvv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyrk-tbvv"/>`,
		"fallback": "pinhead:compact-box-truck-with-greek-cross",
	});
}

export default Component;
