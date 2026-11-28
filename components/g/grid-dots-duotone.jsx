import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwg2ogbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zwg2ogbkm"/>`,
		"fallback": "iconaut:grid-dots-duotone",
	});
}

export default Component;
