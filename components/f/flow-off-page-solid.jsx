import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxl-5499g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxl-5499g"/>`,
		"fallback": "iconaut:flow-off-page-solid",
	});
}

export default Component;
