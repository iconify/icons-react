import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq7f5gbmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq7f5gbmk"/>`,
		"fallback": "vaadin:close-small",
	});
}

export default Component;
