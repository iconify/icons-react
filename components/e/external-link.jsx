import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m30rb2h_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m30rb2h_n"/>`,
		"fallback": "vadivam:external-link",
	});
}

export default Component;
