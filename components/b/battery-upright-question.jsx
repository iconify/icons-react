import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oevuh2bns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oevuh2bns"/>`,
		"fallback": "ix:battery-upright-question",
	});
}

export default Component;
