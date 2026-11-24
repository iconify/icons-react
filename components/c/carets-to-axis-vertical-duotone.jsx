import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z13l1kb1f.css';
import '../../css/p/p4lsghbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z13l1kb1f"/><path class="p4lsghbbk"/></g>`,
		"fallback": "lucide-extended:carets-to-axis-vertical-duotone",
	});
}

export default Component;
