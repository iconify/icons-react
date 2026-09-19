import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_2s79bup.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_2s79bup"/>`,
		"fallback": "f7:envelope-fill",
	});
}

export default Component;
