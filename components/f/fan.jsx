import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy6sd3bsj.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy6sd3bsj"/>`,
		"fallback": "wpf:fan",
	});
}

export default Component;
