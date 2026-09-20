import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gik_ayblm.css';
import '../../css/v/vbdl6rpxy.css';
import '../../css/e/em9dkkbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gik_ayblm"/><path class="vbdl6rpxy"/><path class="em9dkkbfa"/></g>`,
		"fallback": "streamline-freehand:app-window-expand",
	});
}

export default Component;
