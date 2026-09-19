import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckj9cdcfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckj9cdcfu"/>`,
		"fallback": "hugeicons:beta",
	});
}

export default Component;
