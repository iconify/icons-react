import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3-4llncc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3-4llncc"/>`,
		"fallback": "lineicons:bootstrap-5-square",
	});
}

export default Component;
