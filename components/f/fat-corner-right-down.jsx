import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxooj1cdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxooj1cdj"/>`,
		"fallback": "mynaui:fat-corner-right-down",
	});
}

export default Component;
