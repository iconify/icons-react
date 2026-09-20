import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxva56-py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxva56-py"/>`,
		"fallback": "uis:corner-left-down",
	});
}

export default Component;
