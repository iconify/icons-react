import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gb-9kfdbc.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/v/vrh7q2dlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gb-9kfdbc"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="vrh7q2dlo"/></g>`,
		"fallback": "lucide-extended:file-plus-corner-duotone",
	});
}

export default Component;
