import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbb9xkbxu.css';
import '../../css/x/xdtxmyf1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbb9xkbxu"/><path class="xdtxmyf1r"/>`,
		"fallback": "energy-icons:chevrons-right-20",
	});
}

export default Component;
