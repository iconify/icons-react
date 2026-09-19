import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7kef078e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7kef078e"/>`,
		"fallback": "gravity-ui:folder-arrow-right",
	});
}

export default Component;
