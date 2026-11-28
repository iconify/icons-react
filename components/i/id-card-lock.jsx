import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr8fltb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr8fltb5l"/>`,
		"fallback": "noviair:id-card-lock",
	});
}

export default Component;
