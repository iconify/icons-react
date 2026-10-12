import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5kjwxi-y.css';
import '../../css/s/sfxd5dbfo.css';
import '../../css/k/kdqg8gh-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5kjwxi-y"/><path class="sfxd5dbfo"/><path class="kdqg8gh-y"/></g>`,
		"fallback": "andrsrxn:file-gif",
	});
}

export default Component;
