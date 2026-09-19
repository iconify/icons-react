import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-amm-_uh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-amm-_uh"/>`,
		"fallback": "fa6-solid:face-surprise",
	});
}

export default Component;
