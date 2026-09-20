import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vbuzuybam.css';
import '../../css/b/bkois7buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vbuzuybam"/><path class="bkois7buo"/></g>`,
		"fallback": "keyline-icons:arrow-big-right-sharp-two-tone",
	});
}

export default Component;
