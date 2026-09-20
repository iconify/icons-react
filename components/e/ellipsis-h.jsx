import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyw85fihm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyw85fihm"/>`,
		"fallback": "uit:ellipsis-h",
	});
}

export default Component;
