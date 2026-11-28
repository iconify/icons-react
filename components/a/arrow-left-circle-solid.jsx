import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avke9od9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avke9od9h"/>`,
		"fallback": "iconaut:arrow-left-circle-solid",
	});
}

export default Component;
