import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9v5hwa6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9v5hwa6y"/>`,
		"fallback": "lets-icons:horizontal-top-right-main",
	});
}

export default Component;
