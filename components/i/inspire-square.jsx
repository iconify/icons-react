import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlkplcb4n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlkplcb4n"/>`,
		"fallback": "academicons:inspire-square",
	});
}

export default Component;
