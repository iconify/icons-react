import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esuzo23md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esuzo23md"/>`,
		"fallback": "noviair-light:image-star",
	});
}

export default Component;
