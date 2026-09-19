import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbihy7btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbihy7btu"/>`,
		"fallback": "feather:columns",
	});
}

export default Component;
