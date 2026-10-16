import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu20-2boz.css';
import '../../css/s/snl0_-vqu.css';
import '../../css/j/jurtbe_bx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu20-2boz"/><path class="snl0_-vqu"/><path class="jurtbe_bx"/>`,
		"fallback": "energy-icons:folder-output-20-bold",
	});
}

export default Component;
