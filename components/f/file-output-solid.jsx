import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc7023fup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc7023fup"/>`,
		"fallback": "iconaut:file-output-solid",
	});
}

export default Component;
