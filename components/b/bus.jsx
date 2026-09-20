import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv23j4gpb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv23j4gpb"/>`,
		"fallback": "pinhead:bus",
	});
}

export default Component;
