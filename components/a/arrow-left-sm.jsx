import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcd3_ql_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcd3_ql_j"/>`,
		"fallback": "ci:arrow-left-sm",
	});
}

export default Component;
