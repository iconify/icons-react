import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mopab5bcz.css';
import '../../css/r/rks2g1j2n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mopab5bcz"/><path class="rks2g1j2n"/></g>`,
		"fallback": "streamline:hard-disk",
	});
}

export default Component;
