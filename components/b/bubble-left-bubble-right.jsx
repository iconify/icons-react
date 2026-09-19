import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d59o-nb4v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d59o-nb4v"/>`,
		"fallback": "f7:bubble-left-bubble-right",
	});
}

export default Component;
