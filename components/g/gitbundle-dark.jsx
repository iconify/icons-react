import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9zf_dony.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9zf_dony"/>`,
		"fallback": "selfhst:gitbundle-dark",
	});
}

export default Component;
