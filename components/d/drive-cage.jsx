import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3n6gqc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3n6gqc6x"/>`,
		"fallback": "grommet-icons:drive-cage",
	});
}

export default Component;
