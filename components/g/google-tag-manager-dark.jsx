import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0uk8wbky.css';
import '../../css/a/acmcm-bzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0uk8wbky"/><path class="acmcm-bzs"/>`,
		"fallback": "selfhst:google-tag-manager-dark",
	});
}

export default Component;
