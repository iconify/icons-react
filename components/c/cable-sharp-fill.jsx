import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pjofeiblv.css';
import '../../css/z/z37i7yg4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pjofeiblv"/><path clip-rule="evenodd" class="z37i7yg4n"/></g>`,
		"fallback": "keyline-icons:cable-sharp-fill",
	});
}

export default Component;
