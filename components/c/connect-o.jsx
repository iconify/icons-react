import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5kb4tbdo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5kb4tbdo"/>`,
		"fallback": "vaadin:connect-o",
	});
}

export default Component;
