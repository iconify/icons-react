import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqqf0usjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqqf0usjo"/>`,
		"fallback": "reicon:chandelier-filled",
	});
}

export default Component;
