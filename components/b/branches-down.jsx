import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8pzq2q8o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a8pzq2q8o"/>`,
		"fallback": "gravity-ui:branches-down",
	});
}

export default Component;
