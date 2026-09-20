import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcl8wgb9d.css';
import '../../css/f/ftvfd4b7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xcl8wgb9d"/><path class="ftvfd4b7r"/></g>`,
		"fallback": "streamline-flex:fragile",
	});
}

export default Component;
