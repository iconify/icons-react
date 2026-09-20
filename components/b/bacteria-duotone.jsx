import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixcurubng.css';
import '../../css/k/ksu2hdvbg.css';
import '../../css/b/b9-b7wbxk.css';
import '../../css/k/kr8qbbc_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixcurubng"/><path class="ksu2hdvbg"/><path clip-rule="evenodd" class="b9-b7wbxk"/><path class="kr8qbbc_c"/></g>`,
		"fallback": "reicon:bacteria-duotone",
	});
}

export default Component;
