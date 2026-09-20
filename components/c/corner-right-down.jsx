import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrc3c7qlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrc3c7qlp"/>`,
		"fallback": "uit:corner-right-down",
	});
}

export default Component;
