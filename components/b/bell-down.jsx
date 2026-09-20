import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzx2ml0ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzx2ml0ot"/>`,
		"fallback": "tabler:bell-down",
	});
}

export default Component;
