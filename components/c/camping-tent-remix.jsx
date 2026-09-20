import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5umh52to.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5umh52to"/>`,
		"fallback": "streamline:camping-tent-remix",
	});
}

export default Component;
