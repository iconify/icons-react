import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/coxf6bb6r.css';
import '../../css/b/b7cp9xema.css';
import '../../css/z/z0tdu3owt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="coxf6bb6r"/><path class="b7cp9xema"/><path class="z0tdu3owt"/></g>`,
		"fallback": "at-icons:floppy-disks",
	});
}

export default Component;
