import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-zw2h7ds.css';
import '../../css/a/acmcm-bzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-zw2h7ds"/><path class="acmcm-bzs"/>`,
		"fallback": "selfhst:google-tag-manager-dark",
	});
}

export default Component;
