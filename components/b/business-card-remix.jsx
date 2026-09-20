import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au0ox3b3b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="au0ox3b3b"/>`,
		"fallback": "streamline:business-card-remix",
	});
}

export default Component;
