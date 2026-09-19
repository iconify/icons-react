import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-pveo_r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly-pveo_r"/>`,
		"fallback": "fluent-mdl2:add-to-shopping-list",
	});
}

export default Component;
