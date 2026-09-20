import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2fis1ivm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2fis1ivm"/>`,
		"fallback": "tdesign:info-circle-filled",
	});
}

export default Component;
