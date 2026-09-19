import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmtfpgbwg.css';

const viewBox = {"width":721,"height":776};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmtfpgbwg"/>`,
		"fallback": "ls:c-upper-case",
	});
}

export default Component;
