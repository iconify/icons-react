import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7brs9b6a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7brs9b6a"/>`,
		"fallback": "entypo:align-vertical-middle",
	});
}

export default Component;
