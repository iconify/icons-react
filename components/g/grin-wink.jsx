import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia_eumbkx.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia_eumbkx"/>`,
		"fallback": "fa-solid:grin-wink",
	});
}

export default Component;
