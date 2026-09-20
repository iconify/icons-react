import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on8hrqu5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on8hrqu5s"/>`,
		"fallback": "uim:align-letter-right",
	});
}

export default Component;
