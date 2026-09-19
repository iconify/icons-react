import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gipn88bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gipn88bdv"/>`,
		"fallback": "akar-icons:arrow-left",
	});
}

export default Component;
