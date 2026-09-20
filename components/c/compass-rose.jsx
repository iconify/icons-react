import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jni6ijbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jni6ijbsd"/>`,
		"fallback": "mdi:compass-rose",
	});
}

export default Component;
