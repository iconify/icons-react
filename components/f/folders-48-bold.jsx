import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxzebdb5x.css';
import '../../css/r/ro3ticcmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxzebdb5x"/><path class="ro3ticcmh"/>`,
		"fallback": "energy-icons:folders-48-bold",
	});
}

export default Component;
