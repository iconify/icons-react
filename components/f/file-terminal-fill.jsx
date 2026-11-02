import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/air_i_kdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="air_i_kdh"/>`,
		"fallback": "mingcute:file-terminal-fill",
	});
}

export default Component;
