import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v35r45b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v35r45b_s"/>`,
		"fallback": "reicon:body-shape2-filled",
	});
}

export default Component;
