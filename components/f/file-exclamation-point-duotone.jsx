import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnrxwwb2a.css';
import '../../css/z/zmi5cpblr.css';
import '../../css/n/nu1ky11cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnrxwwb2a"/><path class="zmi5cpblr"/><path class="nu1ky11cm"/></g>`,
		"fallback": "lucide-extended:file-exclamation-point-duotone",
	});
}

export default Component;
