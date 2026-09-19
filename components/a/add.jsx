import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/daz8nzbyl.css';
import '../../css/g/gopxvnmba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="daz8nzbyl"/><path class="gopxvnmba"/></g>`,
		"fallback": "gg:add",
	});
}

export default Component;
