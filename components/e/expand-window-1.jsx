import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mff4e7myf.css';
import '../../css/v/v3x57pw8b.css';
import '../../css/s/sba0d8bsa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mff4e7myf"/><path class="v3x57pw8b"/><path class="sba0d8bsa"/></g>`,
		"fallback": "streamline-flex:expand-window-1",
	});
}

export default Component;
