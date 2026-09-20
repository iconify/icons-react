import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hseq8db_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hseq8db_g"/>`,
		"fallback": "selfhst:enclosed-dark",
	});
}

export default Component;
