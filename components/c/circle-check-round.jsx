import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqb6uo3um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqb6uo3um"/>`,
		"fallback": "coolicons:circle-check-round",
	});
}

export default Component;
