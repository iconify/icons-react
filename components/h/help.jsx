import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhxum_bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhxum_bwu"/>`,
		"fallback": "grommet-icons:help",
	});
}

export default Component;
