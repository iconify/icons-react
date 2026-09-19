import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxa0j-bas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxa0j-bas"/>`,
		"fallback": "fa6-solid:cheese",
	});
}

export default Component;
