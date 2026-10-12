import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txxqghbst.css';
import '../../css/u/uut0azzwr.css';
import '../../css/m/mv033bbta.css';
import '../../css/d/d2_ueooqs.css';
import '../../css/f/fe81k0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txxqghbst"/><path class="uut0azzwr"/><path class="mv033bbta"/><path class="d2_ueooqs"/><path class="fe81k0bsy"/></g>`,
		"fallback": "lucide-extended:image-play-duotone",
	});
}

export default Component;
