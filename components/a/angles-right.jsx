import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buok6acvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buok6acvq"/>`,
		"fallback": "fa6-solid:angles-right",
	});
}

export default Component;
