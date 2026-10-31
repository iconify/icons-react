import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbm-2zbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbm-2zbrw"/>`,
		"fallback": "withicons:avatar-tiger-gloss",
	});
}

export default Component;
