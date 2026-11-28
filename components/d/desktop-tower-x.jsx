import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-0wkbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg-0wkbqc"/>`,
		"fallback": "noviair-light:desktop-tower-x",
	});
}

export default Component;
