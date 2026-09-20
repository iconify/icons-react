import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-krybrc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-krybrc"/>`,
		"fallback": "vaadin:compile",
	});
}

export default Component;
