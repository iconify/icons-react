import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orkd00b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orkd00b_o"/>`,
		"fallback": "cbi:go-group-off",
	});
}

export default Component;
