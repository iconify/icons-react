import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3yr46bdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3yr46bdt"/>`,
		"fallback": "qlementine-icons:help-16",
	});
}

export default Component;
