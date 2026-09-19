import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbztp_o0v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbztp_o0v"/>`,
		"fallback": "f7:bell-slash-fill",
	});
}

export default Component;
