import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_ddvlnii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_ddvlnii"/>`,
		"fallback": "gravity-ui:boxes-3",
	});
}

export default Component;
