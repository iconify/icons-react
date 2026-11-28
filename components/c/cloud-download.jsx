import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9jctb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9jctb3y"/>`,
		"fallback": "noviair-light:cloud-download",
	});
}

export default Component;
