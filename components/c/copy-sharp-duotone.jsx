import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c-fn48bus.css';
import '../../css/g/gpiqd5sil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c-fn48bus"/><path class="gpiqd5sil"/></g>`,
		"fallback": "keyline-icons:copy-sharp-duotone",
	});
}

export default Component;
