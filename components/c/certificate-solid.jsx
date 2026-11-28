import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mco3pablm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mco3pablm"/>`,
		"fallback": "iconaut:certificate-solid",
	});
}

export default Component;
