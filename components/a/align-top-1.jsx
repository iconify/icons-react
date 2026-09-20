import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz6lxvbyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz6lxvbyl"/>`,
		"fallback": "streamline-flex:align-top-1",
	});
}

export default Component;
