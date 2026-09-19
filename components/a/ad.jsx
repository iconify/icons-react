import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yub020v6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yub020v6d"/>`,
		"fallback": "grommet-icons:ad",
	});
}

export default Component;
