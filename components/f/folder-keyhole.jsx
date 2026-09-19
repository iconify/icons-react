import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiz36_bee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kiz36_bee"/>`,
		"fallback": "gravity-ui:folder-keyhole",
	});
}

export default Component;
