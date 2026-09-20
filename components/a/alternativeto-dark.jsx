import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj_ed3blt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj_ed3blt"/>`,
		"fallback": "selfhst:alternativeto-dark",
	});
}

export default Component;
