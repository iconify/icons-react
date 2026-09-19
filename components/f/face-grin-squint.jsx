import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxg--5aum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxg--5aum"/>`,
		"fallback": "fa6-regular:face-grin-squint",
	});
}

export default Component;
