import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opv1sib8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opv1sib8y"/>`,
		"fallback": "mynaui:bowl-solid",
	});
}

export default Component;
