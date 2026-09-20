import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/de3fnpb6z.css';
import '../../css/u/u34xcowek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="de3fnpb6z"/><path class="u34xcowek"/></g>`,
		"fallback": "keyline-icons:girl-sharp-duotone",
	});
}

export default Component;
