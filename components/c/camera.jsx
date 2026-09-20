import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syqfetb6n.css';
import '../../css/l/lkky-nhlk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syqfetb6n"/><path class="lkky-nhlk"/>`,
		"fallback": "lineicons:camera",
	});
}

export default Component;
