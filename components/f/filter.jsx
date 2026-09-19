import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jerku_bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jerku_bsf"/>`,
		"fallback": "grommet-icons:filter",
	});
}

export default Component;
