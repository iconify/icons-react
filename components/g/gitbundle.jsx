import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-9jh2b_h.css';
import '../../css/l/l2dczz-db.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-9jh2b_h"/><path class="l2dczz-db"/>`,
		"fallback": "selfhst:gitbundle",
	});
}

export default Component;
