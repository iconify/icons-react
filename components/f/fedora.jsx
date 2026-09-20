import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ws7tr1v.css';
import '../../css/r/rg2p71b9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-ws7tr1v"/><path class="rg2p71b9u"/>`,
		"fallback": "selfhst:fedora",
	});
}

export default Component;
