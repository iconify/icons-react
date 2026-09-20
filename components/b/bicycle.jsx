import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye30ufs3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye30ufs3c"/>`,
		"fallback": "roentgen:bicycle",
	});
}

export default Component;
