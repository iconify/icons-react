import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b-i009bge.css';
import '../../css/c/csnq1cbda.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b-i009bge"/><path class="csnq1cbda"/></g>`,
		"fallback": "streamline:gas-station-fuel-petroleum",
	});
}

export default Component;
