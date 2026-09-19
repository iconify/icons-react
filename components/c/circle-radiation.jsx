import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2n6r838m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2n6r838m"/>`,
		"fallback": "fa6-solid:circle-radiation",
	});
}

export default Component;
