import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef983wb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ef983wb2o"/>`,
		"fallback": "iconoir:arrow-up-left-circle-solid",
	});
}

export default Component;
