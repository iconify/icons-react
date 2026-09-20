import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/u/u4qnnrb5s.css';
import '../../css/a/aizjr31qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mw2j0bfon"/><path class="u4qnnrb5s"/><path class="aizjr31qw"/></g>`,
		"fallback": "solar:camera-off-line-duotone",
	});
}

export default Component;
