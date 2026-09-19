import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tckig-5-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tckig-5-x"/>`,
		"fallback": "carbon:import-export",
	});
}

export default Component;
