import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbfsm8byn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbfsm8byn"/>`,
		"fallback": "icomoon-free:ello",
	});
}

export default Component;
