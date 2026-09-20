import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhqeatk_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhqeatk_f"/>`,
		"fallback": "streamline:file-remove-alternate-remix",
	});
}

export default Component;
