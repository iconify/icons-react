import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zllir3b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zllir3b7g"/>`,
		"fallback": "simple-icons:googlestreetview",
	});
}

export default Component;
