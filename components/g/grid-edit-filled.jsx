import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivclsta8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivclsta8s"/>`,
		"fallback": "reicon:grid-edit-filled",
	});
}

export default Component;
