import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssoyox_pc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ssoyox_pc"/>`,
		"fallback": "ix:battery-upright-empty",
	});
}

export default Component;
