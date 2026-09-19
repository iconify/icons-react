import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agklg4i-q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agklg4i-q"/>`,
		"fallback": "f7:forward-end-fill",
	});
}

export default Component;
