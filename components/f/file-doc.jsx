import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6btkpb1k.css';
import '../../css/m/m9p18tack.css';
import '../../css/i/ifc6tcces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6btkpb1k"/><path class="m9p18tack"/><path class="ifc6tcces"/></g>`,
		"fallback": "andrsrxn:file-doc",
	});
}

export default Component;
