import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oncic6b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oncic6b9e"/>`,
		"fallback": "codicon:debug",
	});
}

export default Component;
