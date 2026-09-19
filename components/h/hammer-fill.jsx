import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isoz64bhd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isoz64bhd"/>`,
		"fallback": "f7:hammer-fill",
	});
}

export default Component;
