import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nocli_5sf.css';
import '../../css/l/lgcpa0bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nocli_5sf"/><path class="lgcpa0bnl"/></g>`,
		"fallback": "streamline-freehand:bluetooth-transfer",
	});
}

export default Component;
