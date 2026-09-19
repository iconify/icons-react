import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyi44ab9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyi44ab9b"/>`,
		"fallback": "fa-solid:hand-spock",
	});
}

export default Component;
