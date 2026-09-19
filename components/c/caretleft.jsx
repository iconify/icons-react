import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjp4mac5a.css';

const viewBox = {"width":9,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjp4mac5a"/>`,
		"fallback": "formkit:caretleft",
	});
}

export default Component;
