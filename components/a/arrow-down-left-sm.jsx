import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqyb2t4zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqyb2t4zv"/>`,
		"fallback": "ci:arrow-down-left-sm",
	});
}

export default Component;
