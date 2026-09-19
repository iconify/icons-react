import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq3j7uixf.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq3j7uixf"/>`,
		"fallback": "fontisto:asterisk",
	});
}

export default Component;
