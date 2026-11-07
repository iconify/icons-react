import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el_6s4qrm.css';
import '../../css/d/dnt469bqu.css';
import '../../css/b/bmgyaxqnm.css';
import '../../css/i/i4d0c09qh.css';
import '../../css/b/bypq3rbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el_6s4qrm"/><path class="dnt469bqu"/><path clip-rule="evenodd" class="bmgyaxqnm"/><path clip-rule="evenodd" class="i4d0c09qh"/><path clip-rule="evenodd" class="bypq3rbvd"/>`,
		"fallback": "solar:cart-large-4-outline",
	});
}

export default Component;
