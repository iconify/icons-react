import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tro4qhbhl.css';
import '../../css/y/y5a_feb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tro4qhbhl"/><path class="y5a_feb2v"/>`,
		"fallback": "lets-icons:box-fill-duotone",
	});
}

export default Component;
