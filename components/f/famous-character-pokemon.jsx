import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_a637beg.css';
import '../../css/u/uclb-kbwz.css';
import '../../css/m/m_oz3-fiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r_a637beg"/><path class="uclb-kbwz"/><path class="m_oz3-fiu"/></g>`,
		"fallback": "streamline-freehand:famous-character-pokemon",
	});
}

export default Component;
