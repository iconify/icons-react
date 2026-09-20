import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ii09ulbxz.css';
import '../../css/t/t-_lz9byc.css';
import '../../css/d/dypaabdnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ii09ulbxz"/><path class="t-_lz9byc"/><path class="dypaabdnq"/></g>`,
		"fallback": "streamline-freehand:composition-paronama-horizontal",
	});
}

export default Component;
