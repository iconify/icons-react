import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acyf46khq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acyf46khq"/>`,
		"fallback": "mynaui:heading-two-solid",
	});
}

export default Component;
