import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i4jq_nbjt.css';
import '../../css/r/rpvlrx2fk.css';
import '../../css/c/c3cgqbcmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i4jq_nbjt"/><path class="rpvlrx2fk"/><path class="c3cgqbcmn"/></g>`,
		"fallback": "streamline-freehand:camera",
	});
}

export default Component;
