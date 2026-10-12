import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4nbxblj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4nbxblj"/>`,
		"fallback": "garden:bold-20",
	});
}

export default Component;
