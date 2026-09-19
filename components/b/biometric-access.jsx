import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s5vktnbeo.css';
import '../../css/u/unskt_bda.css';
import '../../css/t/tcghh8b0d.css';
import '../../css/m/mon8s9lvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s5vktnbeo"/><path class="unskt_bda"/><path class="tcghh8b0d"/><path class="mon8s9lvs"/></g>`,
		"fallback": "hugeicons:biometric-access",
	});
}

export default Component;
