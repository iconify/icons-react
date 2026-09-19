import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au-murnwq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au-murnwq"/>`,
		"fallback": "f7:arrowtriangle-right-square-fill",
	});
}

export default Component;
