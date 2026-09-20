import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m2h245y9u.css';
import '../../css/s/sdqr8yk5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m2h245y9u"/><path class="sdqr8yk5x"/></g>`,
		"fallback": "streamline-flex:airplane-disabled",
	});
}

export default Component;
