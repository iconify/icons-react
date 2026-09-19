import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6nebcdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn6nebcdf"/>`,
		"fallback": "iconamoon:arrow-bottom-right-3-square-light",
	});
}

export default Component;
