import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htfk-0bug.css';
import '../../css/u/u_em3xrxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htfk-0bug"/><path class="u_em3xrxa"/>`,
		"fallback": "withicons-bauhaus:bluetooth",
	});
}

export default Component;
