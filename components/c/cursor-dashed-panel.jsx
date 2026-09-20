import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfbuyzb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfbuyzb0g"/>`,
		"fallback": "keyline-icons:cursor-dashed-panel",
	});
}

export default Component;
