import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad6lndbtj.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/b/bd9izwnjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ad6lndbtj"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="bd9izwnjt"/></g>`,
		"fallback": "lucide-extended:file-check-corner-duotone",
	});
}

export default Component;
