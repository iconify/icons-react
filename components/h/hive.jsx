import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn18l3rik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn18l3rik"/>`,
		"fallback": "game-icons:hive",
	});
}

export default Component;
