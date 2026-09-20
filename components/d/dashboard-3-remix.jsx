import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcpm6yshk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcpm6yshk"/>`,
		"fallback": "streamline-flex:dashboard-3-remix",
	});
}

export default Component;
