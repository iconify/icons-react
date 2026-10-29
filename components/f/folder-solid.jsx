import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vef0kgbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vef0kgbmi"/>`,
		"fallback": "withicons:folder-solid",
	});
}

export default Component;
