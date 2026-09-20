import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo315ybiu.css';
import '../../css/y/yhc5jdzvp.css';
import '../../css/u/u27udoylh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGGBPZIFRM" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo315ybiu"/><stop offset="1" class="yhc5jdzvp"/></linearGradient><path fill="url(#SVGGBPZIFRM)" class="u27udoylh"/>`,
		"fallback": "selfhst:folderhost",
	});
}

export default Component;
