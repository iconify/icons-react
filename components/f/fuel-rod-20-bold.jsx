import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p169fcb-f.css';
import '../../css/z/z26u7ebdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p169fcb-f"/><path class="z26u7ebdk"/>`,
		"fallback": "energy-icons:fuel-rod-20-bold",
	});
}

export default Component;
