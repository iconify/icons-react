import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scjpqqb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scjpqqb1r"/>`,
		"fallback": "tabler:hexagon-letter-b-filled",
	});
}

export default Component;
