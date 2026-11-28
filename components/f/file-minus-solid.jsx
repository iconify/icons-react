import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtuchbc2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtuchbc2y"/>`,
		"fallback": "iconaut:file-minus-solid",
	});
}

export default Component;
