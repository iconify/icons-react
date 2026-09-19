import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyoi2_bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyoi2_bhk"/>`,
		"fallback": "heroicons-outline:face-smile",
	});
}

export default Component;
