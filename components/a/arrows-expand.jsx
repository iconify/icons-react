import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y59dy_n5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y59dy_n5f"/>`,
		"fallback": "nrk:arrows-expand",
	});
}

export default Component;
