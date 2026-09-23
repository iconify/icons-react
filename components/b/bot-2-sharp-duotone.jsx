import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/l/lvsowdyvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h5v13_bfu"/><path class="lvsowdyvi"/></g>`,
		"fallback": "keyline-icons:bot-2-sharp-duotone",
	});
}

export default Component;
