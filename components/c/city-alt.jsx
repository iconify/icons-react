import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjs0b7ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjs0b7ben"/>`,
		"fallback": "griddy-icons:city-alt",
	});
}

export default Component;
