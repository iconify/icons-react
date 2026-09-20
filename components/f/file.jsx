import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbfsggb2j.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbfsggb2j"/>`,
		"fallback": "jam:file",
	});
}

export default Component;
