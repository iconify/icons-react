import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x-pblibxt.css';
import '../../css/f/f03i904iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x-pblibxt"/><path class="f03i904iz"/></g>`,
		"fallback": "streamline-logos:deviant-art-logo-1",
	});
}

export default Component;
