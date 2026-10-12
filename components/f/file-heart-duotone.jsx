import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6u69tk9d.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/w/wy30a9trv.css';
import '../../css/a/ab-i7abzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f6u69tk9d"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="wy30a9trv"/><path class="ab-i7abzq"/></g>`,
		"fallback": "lucide-extended:file-heart-duotone",
	});
}

export default Component;
