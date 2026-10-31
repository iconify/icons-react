import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc2nu2bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc2nu2bgf"/>`,
		"fallback": "withicons:arrow-down-gloss",
	});
}

export default Component;
