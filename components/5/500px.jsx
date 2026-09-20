import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t541ctb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t541ctb8p"/>`,
		"fallback": "uil:500px",
	});
}

export default Component;
