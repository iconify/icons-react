import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsx9oea-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsx9oea-w"/>`,
		"fallback": "withicons:folder-check-solid",
	});
}

export default Component;
