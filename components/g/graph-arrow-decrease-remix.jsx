import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojyj0msue.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojyj0msue"/>`,
		"fallback": "streamline:graph-arrow-decrease-remix",
	});
}

export default Component;
