import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyz43k57l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyz43k57l"/>`,
		"fallback": "vaadin:eject",
	});
}

export default Component;
