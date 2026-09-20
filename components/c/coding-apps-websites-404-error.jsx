import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2_ig9bdg.css';
import '../../css/a/ad10q6v-c.css';
import '../../css/g/gzy0p2veo.css';
import '../../css/u/u2h60dbhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2_ig9bdg"/><path class="ad10q6v-c"/><path class="gzy0p2veo"/><path class="u2h60dbhp"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-404-error",
	});
}

export default Component;
