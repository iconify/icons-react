import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftu5u0jmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftu5u0jmk"/>`,
		"fallback": "grommet-icons:back-ten",
	});
}

export default Component;
