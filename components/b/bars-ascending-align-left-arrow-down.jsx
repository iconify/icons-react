import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb775zgkh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gb775zgkh"/>`,
		"fallback": "gravity-ui:bars-ascending-align-left-arrow-down",
	});
}

export default Component;
