import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdv0xacjw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdv0xacjw"/>`,
		"fallback": "dinkie-icons:heart-white-suit-small",
	});
}

export default Component;
