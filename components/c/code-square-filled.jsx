import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p80_bmxoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p80_bmxoy"/>`,
		"fallback": "griddy-icons:code-square-filled",
	});
}

export default Component;
