import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy7ws3bbg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy7ws3bbg"/>`,
		"fallback": "garden:code-bracket-20",
	});
}

export default Component;
