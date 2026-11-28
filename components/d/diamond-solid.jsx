import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqs_mfb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqs_mfb9g"/>`,
		"fallback": "iconaut:diamond-solid",
	});
}

export default Component;
