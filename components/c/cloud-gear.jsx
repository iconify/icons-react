import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv-vtkbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv-vtkbyh"/>`,
		"fallback": "noviair-light:cloud-gear",
	});
}

export default Component;
