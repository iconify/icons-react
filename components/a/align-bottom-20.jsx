import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0-d2gbnz.css';
import '../../css/b/bwrmw-1aq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0-d2gbnz"/><path class="bwrmw-1aq"/>`,
		"fallback": "energy-icons:align-bottom-20",
	});
}

export default Component;
