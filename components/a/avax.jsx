import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_zsdf4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk_zsdf4i"/>`,
		"fallback": "cryptocurrency:avax",
	});
}

export default Component;
