import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wb97w6-lx.css';
import '../../css/b/b2gj5ubme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wb97w6-lx"/><path class="b2gj5ubme"/></g>`,
		"fallback": "streamline:button-fast-forward-1",
	});
}

export default Component;
