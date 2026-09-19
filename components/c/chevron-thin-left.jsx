import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb785qb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb785qb9t"/>`,
		"fallback": "entypo:chevron-thin-left",
	});
}

export default Component;
