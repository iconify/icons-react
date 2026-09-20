import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgs7b6s9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgs7b6s9i"/>`,
		"fallback": "uis:clinic-medical",
	});
}

export default Component;
