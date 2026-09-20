import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqch9n6xp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqch9n6xp"/>`,
		"fallback": "subway:folder-3",
	});
}

export default Component;
