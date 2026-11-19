import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6gs6rbtb.css';
import '../../css/m/mf-rqbcch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6gs6rbtb"/><path class="mf-rqbcch"/>`,
		"fallback": "selfhst:infisical",
	});
}

export default Component;
