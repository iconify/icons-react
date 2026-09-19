import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asimzwl4y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asimzwl4y"/>`,
		"fallback": "f7:ellipsis-vertical-circle-fill",
	});
}

export default Component;
