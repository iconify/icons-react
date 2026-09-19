import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rximrwb4r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rximrwb4r"/>`,
		"fallback": "f7:cart",
	});
}

export default Component;
