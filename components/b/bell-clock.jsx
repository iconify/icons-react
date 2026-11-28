import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbllcy7kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbllcy7kg"/>`,
		"fallback": "noviair:bell-clock",
	});
}

export default Component;
