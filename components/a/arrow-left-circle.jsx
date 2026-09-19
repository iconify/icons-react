import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oncixdb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oncixdb2e"/>`,
		"fallback": "iconoir:arrow-left-circle",
	});
}

export default Component;
