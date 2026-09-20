import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpc_a-egz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpc_a-egz"/>`,
		"fallback": "tabler:brand-mysql",
	});
}

export default Component;
