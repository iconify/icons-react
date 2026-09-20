import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2766uktk.css';
import '../../css/l/l2dczz-db.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2766uktk"/><path class="l2dczz-db"/>`,
		"fallback": "selfhst:gitbundle",
	});
}

export default Component;
