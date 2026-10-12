import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9nxijbxs.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/c/cr2hv5bad.css';
import '../../css/v/vjgf328hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9nxijbxs"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="cr2hv5bad"/><path class="vjgf328hd"/></g>`,
		"fallback": "lucide-extended:file-volume-duotone",
	});
}

export default Component;
