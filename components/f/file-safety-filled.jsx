import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7kb0dbiu.css';
import '../../css/o/o5jloubyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7kb0dbiu"/><path class="o5jloubyh"/>`,
		"fallback": "tdesign:file-safety-filled",
	});
}

export default Component;
