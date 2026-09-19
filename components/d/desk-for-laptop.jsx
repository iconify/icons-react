import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywize-p9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywize-p9l"/>`,
		"fallback": "guidance:desk-for-laptop",
	});
}

export default Component;
