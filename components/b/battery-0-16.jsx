import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffaginb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffaginb4b"/>`,
		"fallback": "qlementine-icons:battery-0-16",
	});
}

export default Component;
