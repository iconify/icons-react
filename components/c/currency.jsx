import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9m2k2blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9m2k2blw"/>`,
		"fallback": "grommet-icons:currency",
	});
}

export default Component;
