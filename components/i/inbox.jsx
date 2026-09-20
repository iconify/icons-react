import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2ifz99p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ay2ifz99p"/>`,
		"fallback": "reicon:inbox",
	});
}

export default Component;
