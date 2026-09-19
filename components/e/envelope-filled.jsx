import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpqqn6bis.css';
import '../../css/r/rln8920_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpqqn6bis"/><path class="rln8920_k"/>`,
		"fallback": "boxicons:envelope-filled",
	});
}

export default Component;
