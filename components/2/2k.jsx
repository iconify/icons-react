import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg4ienb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg4ienb7w"/>`,
		"fallback": "thesvg-color:2k",
	});
}

export default Component;
