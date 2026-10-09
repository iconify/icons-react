import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4d61mpoq.css';
import '../../css/l/l0042n2sd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4d61mpoq"/><path class="l0042n2sd"/>`,
		"fallback": "energy-icons:fuse-20-bold",
	});
}

export default Component;
