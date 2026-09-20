import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z01btdcof.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z01btdcof"/>`,
		"fallback": "streamline:cellular-network-lte-remix",
	});
}

export default Component;
