import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-000_rgo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-000_rgo"/>`,
		"fallback": "streamline-flex:computer-chip-1",
	});
}

export default Component;
