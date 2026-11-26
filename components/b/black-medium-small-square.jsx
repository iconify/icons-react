import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2fsuke8d.css';
import '../../css/w/wtquvrszr.css';
import '../../css/m/mqjl736ln.css';
import '../../css/r/r1g0lwvyb.css';
import '../../css/w/woav2pb7n.css';
import '../../css/b/berqjq_wi.css';
import '../../css/n/nrit7ww5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG76AZjbeo" cx="51.2" cy="42.6" r="113.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="p2fsuke8d"/><stop offset=".85" class="wtquvrszr"/><stop offset="1" class="wtquvrszr"/></radialGradient></defs><path class="mqjl736ln"/><path fill="url(#SVG76AZjbeo)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="r1g0lwvyb"/><path class="woav2pb7n"/><path class="berqjq_wi"/><path class="nrit7ww5b"/>`,
		"fallback": "xero-emoji:black-medium-small-square",
	});
}

export default Component;
