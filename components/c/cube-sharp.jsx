import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvub7-qvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvub7-qvf"/>`,
		"fallback": "famicons:cube-sharp",
	});
}

export default Component;
