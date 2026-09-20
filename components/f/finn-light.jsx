import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbn6v7b5m.css';
import '../../css/z/zd_hbsbad.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbn6v7b5m"/><path class="zd_hbsbad"/><path class="rp7oy-b8j"/>`,
		"fallback": "selfhst:finn-light",
	});
}

export default Component;
