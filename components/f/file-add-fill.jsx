import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq0e4bhuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq0e4bhuj"/>`,
		"fallback": "eva:file-add-fill",
	});
}

export default Component;
