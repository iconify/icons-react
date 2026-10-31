import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csk8wdbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csk8wdbny"/>`,
		"fallback": "coolicons:arrow-down-right-large-round",
	});
}

export default Component;
