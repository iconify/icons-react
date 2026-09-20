import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhiv34b3u.css';
import '../../css/s/s0zsy9ict.css';
import '../../css/r/rxgxyql7i.css';
import '../../css/r/rfs441tmx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhiv34b3u"/><path class="s0zsy9ict"/><path class="rxgxyql7i"/><path class="rfs441tmx"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-st-kitts-nevis",
	});
}

export default Component;
