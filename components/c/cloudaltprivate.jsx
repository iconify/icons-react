import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmmkku4_s.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmmkku4_s"/>`,
		"fallback": "whh:cloudaltprivate",
	});
}

export default Component;
