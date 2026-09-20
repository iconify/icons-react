import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/crn6gciva.css';
import '../../css/s/s80r0dgik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="crn6gciva"/><path class="s80r0dgik"/></g>`,
		"fallback": "streamline-sharp:circus-tent",
	});
}

export default Component;
