import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhd2yph4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhd2yph4f"/>`,
		"fallback": "tdesign:component-steps-filled",
	});
}

export default Component;
