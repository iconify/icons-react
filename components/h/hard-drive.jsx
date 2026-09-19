import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_bcm4bkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_bcm4bkn"/>`,
		"fallback": "fa6-solid:hard-drive",
	});
}

export default Component;
