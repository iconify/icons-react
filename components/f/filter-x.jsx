import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-9kwzbci.css';
import '../../css/l/lh4n09blc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-9kwzbci"/><path class="lh4n09blc"/>`,
		"fallback": "cil:filter-x",
	});
}

export default Component;
