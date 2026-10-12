import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnrxwwb2a.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/x/xxnn33qgn.css';
import '../../css/s/sqh4n7bkg.css';
import '../../css/w/w66escbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnrxwwb2a"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="xxnn33qgn"/><path class="sqh4n7bkg"/><path class="w66escbsg"/></g>`,
		"fallback": "lucide-extended:file-image-duotone",
	});
}

export default Component;
