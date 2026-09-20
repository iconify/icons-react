import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llrxv2dez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llrxv2dez"/>`,
		"fallback": "streamline:dressing-table-remix",
	});
}

export default Component;
