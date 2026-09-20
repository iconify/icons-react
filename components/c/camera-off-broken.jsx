import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/blo41m3ob.css';
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
		"content": `<g class="ipq1z-bjh"><path class="blo41m3ob"/><path class="u4qnnrb5s"/><path class="aizjr31qw"/></g>`,
		"fallback": "solar:camera-off-broken",
	});
}

export default Component;
