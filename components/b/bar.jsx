import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7cyh0pna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7cyh0pna"/>`,
		"fallback": "grommet-icons:bar",
	});
}

export default Component;
