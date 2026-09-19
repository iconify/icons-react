import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7756kbvi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7756kbvi"/>`,
		"fallback": "f7:capsule-fill",
	});
}

export default Component;
