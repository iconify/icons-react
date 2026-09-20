import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q713wstdn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q713wstdn"/>`,
		"fallback": "vaadin:ellipsis-h",
	});
}

export default Component;
