import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eum4rlqcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eum4rlqcv"/>`,
		"fallback": "grommet-icons:chapter-previous",
	});
}

export default Component;
