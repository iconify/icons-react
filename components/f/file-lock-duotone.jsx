import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9-ft2ukl.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/p/p8ae5pb8m.css';
import '../../css/b/bd29phbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9-ft2ukl"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="p8ae5pb8m"/><path class="bd29phbwt"/></g>`,
		"fallback": "lucide-extended:file-lock-duotone",
	});
}

export default Component;
