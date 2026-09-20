import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js-u0nt0s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="js-u0nt0s"/>`,
		"fallback": "streamline:briefcase-dollar-solid",
	});
}

export default Component;
