import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyil6ty8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyil6ty8w"/>`,
		"fallback": "uil:calling",
	});
}

export default Component;
