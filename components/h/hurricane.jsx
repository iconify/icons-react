import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8njocc5l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8njocc5l"/>`,
		"fallback": "f7:hurricane",
	});
}

export default Component;
