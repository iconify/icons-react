import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z6eswjbsp.css';
import '../../css/p/pvksh5_ap.css';
import '../../css/h/h6pfvubgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z6eswjbsp"/><path class="pvksh5_ap"/><path class="h6pfvubgz"/></g>`,
		"fallback": "hugeicons:floppy-disk",
	});
}

export default Component;
