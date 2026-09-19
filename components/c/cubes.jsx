import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzb79obee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzb79obee"/>`,
		"fallback": "fa-solid:cubes",
	});
}

export default Component;
