import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-4c_3dfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-4c_3dfe"/>`,
		"fallback": "withicons:database-gloss",
	});
}

export default Component;
