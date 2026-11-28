import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amj_hoytj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amj_hoytj"/>`,
		"fallback": "iconaut:circle-list-filter-solid",
	});
}

export default Component;
