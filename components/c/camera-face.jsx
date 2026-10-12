import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nusilhbug.css';
import '../../css/l/lgi836qzt.css';
import '../../css/u/uefnjzbrc.css';
import '../../css/g/gz5pd9aeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nusilhbug"/><path class="lgi836qzt"/><path class="uefnjzbrc"/><path class="gz5pd9aeu"/></g>`,
		"fallback": "andrsrxn:camera-face",
	});
}

export default Component;
