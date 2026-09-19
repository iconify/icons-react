import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgb26qb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgb26qb4j"/>`,
		"fallback": "bxl:facebook-circle",
	});
}

export default Component;
