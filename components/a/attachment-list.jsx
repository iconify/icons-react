import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g024h_b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g024h_b-l"/>`,
		"fallback": "tdesign:attachment-list",
	});
}

export default Component;
