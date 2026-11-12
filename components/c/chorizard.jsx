import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w56ozbb3k.css';
import '../../css/d/dedjm9gwi.css';
import '../../css/p/p8l3crl_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w56ozbb3k"/><path class="dedjm9gwi"/><path class="p8l3crl_d"/>`,
		"fallback": "selfhst:chorizard",
	});
}

export default Component;
