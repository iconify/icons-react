import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjs2h1e2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjs2h1e2y"/>`,
		"fallback": "guidance:children-must-be-supervised",
	});
}

export default Component;
