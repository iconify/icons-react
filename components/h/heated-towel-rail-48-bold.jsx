import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbuh36b3k.css';
import '../../css/y/yvatoebpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbuh36b3k"/><path class="yvatoebpm"/>`,
		"fallback": "energy-icons:heated-towel-rail-48-bold",
	});
}

export default Component;
