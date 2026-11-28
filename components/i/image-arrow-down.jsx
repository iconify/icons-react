import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au7bzabxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au7bzabxn"/>`,
		"fallback": "noviair-light:image-arrow-down",
	});
}

export default Component;
