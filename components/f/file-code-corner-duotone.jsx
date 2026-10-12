import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1gmv6bmb.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/g/g7j8qgbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1gmv6bmb"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="g7j8qgbbn"/></g>`,
		"fallback": "lucide-extended:file-code-corner-duotone",
	});
}

export default Component;
