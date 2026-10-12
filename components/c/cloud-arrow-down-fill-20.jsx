import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgm-muboc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgm-muboc"/>`,
		"fallback": "garden:cloud-arrow-down-fill-20",
	});
}

export default Component;
