import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-55vfbsm.css';
import '../../css/c/cwu-c8bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-55vfbsm"/><path class="cwu-c8bkp"/>`,
		"fallback": "boxicons:fish",
	});
}

export default Component;
