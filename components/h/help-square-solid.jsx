import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwu41bb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwu41bb5g"/>`,
		"fallback": "iconoir:help-square-solid",
	});
}

export default Component;
