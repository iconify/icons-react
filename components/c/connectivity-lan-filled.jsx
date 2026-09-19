import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eald8w6bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eald8w6bs"/>`,
		"fallback": "griddy-icons:connectivity-lan-filled",
	});
}

export default Component;
