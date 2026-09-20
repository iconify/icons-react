import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ootklr19s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ootklr19s"/>`,
		"fallback": "uil:commnet-alt-slash",
	});
}

export default Component;
