import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w9eox2blt.css';
import '../../css/m/m1siuiblp.css';
import '../../css/u/ueo3t_b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w9eox2blt"/><path class="m1siuiblp"/><path class="ueo3t_b4f"/></g>`,
		"fallback": "streamline-freehand:accessories-retro-film-1",
	});
}

export default Component;
