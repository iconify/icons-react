import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk9skhkui.css';
import '../../css/q/qqlpehxim.css';
import '../../css/f/fe61ukfco.css';
import '../../css/m/mdfdrlbhr.css';
import '../../css/b/bsmairrif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk9skhkui"/><path class="qqlpehxim"/><path class="fe61ukfco"/><path class="mdfdrlbhr"/><path class="bsmairrif"/>`,
		"fallback": "solar:binoculars-outline",
	});
}

export default Component;
