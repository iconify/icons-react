import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzyapqb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzyapqb0l"/>`,
		"fallback": "iconaut:foldable-portrait-solid",
	});
}

export default Component;
