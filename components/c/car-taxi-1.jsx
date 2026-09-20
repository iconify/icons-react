import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ohi_nuvil.css';
import '../../css/b/bnrra0i4x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ohi_nuvil"/><path class="bnrra0i4x"/></g>`,
		"fallback": "streamline:car-taxi-1",
	});
}

export default Component;
