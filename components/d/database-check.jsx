import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lpfiuemyw.css';
import '../../css/n/nvffkfrqt.css';
import '../../css/t/t528u_ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lpfiuemyw"/><path class="nvffkfrqt"/><path class="t528u_ben"/></g>`,
		"fallback": "streamline-freehand:database-check",
	});
}

export default Component;
