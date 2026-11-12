import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp935pb2i.css';
import '../../css/c/ca5grhk1u.css';
import '../../css/n/nw9d4_b1h.css';
import '../../css/v/v5mwmtcdx.css';
import '../../css/g/g-b-uhbfo.css';
import '../../css/z/zwqvp3b5q.css';
import '../../css/f/f6xhfhbqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGoHhOye9k" cx="-286.878" cy="685.721" r="255.952" gradientTransform="matrix(0 -1.982 1.8439 0 -1128.4 -17.24)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sp935pb2i"/><stop offset=".1" class="sp935pb2i"/><stop offset=".5" class="ca5grhk1u"/><stop offset="1" class="nw9d4_b1h"/></radialGradient><path fill="url(#SVGoHhOye9k)" class="v5mwmtcdx"/><radialGradient id="SVG0yO91c8V" cx="394.107" cy="480.96" r="255.952" gradientTransform="matrix(.1739 .8687 -3.5818 .7172 1568.4 -650.37)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g-b-uhbfo"/><stop offset=".128" class="g-b-uhbfo"/><stop offset="1" class="zwqvp3b5q"/></radialGradient><path fill="url(#SVG0yO91c8V)" class="v5mwmtcdx"/><path class="f6xhfhbqg"/>`,
		"fallback": "selfhst:instagram",
	});
}

export default Component;
