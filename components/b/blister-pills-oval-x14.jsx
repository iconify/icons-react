import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lchin2bjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lchin2bjk"/>`,
		"fallback": "healthicons:blister-pills-oval-x14",
	});
}

export default Component;
