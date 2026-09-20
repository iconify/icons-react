import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edi2sub5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edi2sub5w"/>`,
		"fallback": "streamline-ultimate:arrow-right-bold",
	});
}

export default Component;
