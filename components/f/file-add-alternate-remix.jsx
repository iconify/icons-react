import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu9tx1bnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wu9tx1bnm"/>`,
		"fallback": "streamline:file-add-alternate-remix",
	});
}

export default Component;
