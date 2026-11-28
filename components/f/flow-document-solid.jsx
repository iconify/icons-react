import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax-e-ryoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax-e-ryoj"/>`,
		"fallback": "iconaut:flow-document-solid",
	});
}

export default Component;
