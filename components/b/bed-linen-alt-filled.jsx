import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm-mfbn3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm-mfbn3l"/>`,
		"fallback": "griddy-icons:bed-linen-alt-filled",
	});
}

export default Component;
