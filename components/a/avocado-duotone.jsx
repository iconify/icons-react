import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rya9mtv8n.css';
import '../../css/y/yt3a_1kmm.css';
import '../../css/v/veoxucbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rya9mtv8n"/><path class="yt3a_1kmm"/><path class="veoxucbeb"/></g>`,
		"fallback": "lucide-extended:avocado-duotone",
	});
}

export default Component;
