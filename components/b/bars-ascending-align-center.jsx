import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou84d-bcf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ou84d-bcf"/>`,
		"fallback": "gravity-ui:bars-ascending-align-center",
	});
}

export default Component;
