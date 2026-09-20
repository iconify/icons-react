import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmmikzb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmmikzb2f"/>`,
		"fallback": "mingcute:arow-to-right-line",
	});
}

export default Component;
