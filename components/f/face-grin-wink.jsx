import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejpq9_evm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejpq9_evm"/>`,
		"fallback": "fa6-regular:face-grin-wink",
	});
}

export default Component;
