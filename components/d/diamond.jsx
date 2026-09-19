import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk6phkbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk6phkbnr"/>`,
		"fallback": "grommet-icons:diamond",
	});
}

export default Component;
