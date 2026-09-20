import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqz1aw1rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqz1aw1rt"/>`,
		"fallback": "lets-icons:flag-finish-light",
	});
}

export default Component;
