import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7n7kbto.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym7n7kbto"/>`,
		"fallback": "fa6-solid:hand-spock",
	});
}

export default Component;
