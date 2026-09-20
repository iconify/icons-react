import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fzg7zib3v.css';
import '../../css/b/baq7v_06m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fzg7zib3v"/><path class="baq7v_06m"/></g>`,
		"fallback": "streamline-logos:basecamp-logo-1",
	});
}

export default Component;
