import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6j73nbxv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6j73nbxv"/>`,
		"fallback": "foundation:bookmark",
	});
}

export default Component;
