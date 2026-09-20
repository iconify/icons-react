import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg566bbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg566bbmi"/>`,
		"fallback": "lucide:arrow-right",
	});
}

export default Component;
