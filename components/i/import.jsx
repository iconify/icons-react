import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq0busbei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq0busbei"/>`,
		"fallback": "icons8:import",
	});
}

export default Component;
