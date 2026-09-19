import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wln1wzvwu.css';
import '../../css/w/w922bmbpr.css';
import '../../css/s/sxrrkcbfz.css';
import '../../css/j/jkqmscctt.css';
import '../../css/j/js90i1apb.css';
import '../../css/g/g112febve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wln1wzvwu"/><path class="w922bmbpr"/><path class="sxrrkcbfz"/><path class="jkqmscctt"/><path class="js90i1apb"/><path class="g112febve"/>`,
		"fallback": "gcp:assured-workloads",
	});
}

export default Component;
