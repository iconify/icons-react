import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yed5v9b2p.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yed5v9b2p"/>`,
		"fallback": "fa6-solid:house-chimney-user",
	});
}

export default Component;
