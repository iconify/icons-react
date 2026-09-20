import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnvtnnk5e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnvtnnk5e"/>`,
		"fallback": "pinhead:ethernet-port-in-rounded-square",
	});
}

export default Component;
