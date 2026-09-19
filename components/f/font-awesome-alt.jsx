import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhdau5_nb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhdau5_nb"/>`,
		"fallback": "fa-brands:font-awesome-alt",
	});
}

export default Component;
