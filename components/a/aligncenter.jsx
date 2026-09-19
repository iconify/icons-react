import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8v619bxi.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8v619bxi"/>`,
		"fallback": "whh:aligncenter",
	});
}

export default Component;
