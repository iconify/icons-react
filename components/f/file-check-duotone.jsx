import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnrxwwb2a.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/q/qv0-n9bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnrxwwb2a"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="qv0-n9bkr"/></g>`,
		"fallback": "lucide-extended:file-check-duotone",
	});
}

export default Component;
