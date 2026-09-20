import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyqi38btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyqi38btk"/>`,
		"fallback": "thesvg-color:china-southern-airlines",
	});
}

export default Component;
