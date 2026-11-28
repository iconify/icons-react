import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yquh6-eyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary yquh6-eyl"/>`,
		"fallback": "iconaut:atom-duotone",
	});
}

export default Component;
