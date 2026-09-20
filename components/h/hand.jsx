import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb90-ob5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb90-ob5z"/>`,
		"fallback": "vaadin:hand",
	});
}

export default Component;
