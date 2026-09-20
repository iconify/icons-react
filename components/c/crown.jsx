import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq9jx2m6e.css';
import '../../css/d/dfaqi5b4x.css';
import '../../css/n/nvxia9buc.css';
import '../../css/u/uy2i3ccvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uq9jx2m6e"/><circle class="dfaqi5b4x"/><circle class="nvxia9buc"/><circle class="uy2i3ccvf"/></g>`,
		"fallback": "proicons:crown",
	});
}

export default Component;
