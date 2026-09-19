import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbf5acc-u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbf5acc-u"/>`,
		"fallback": "fa7-solid:circle-radiation",
	});
}

export default Component;
