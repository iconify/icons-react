import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x-qubjuru.css';
import '../../css/y/y18ikz8_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x-qubjuru"/><path class="y18ikz8_o"/></g>`,
		"fallback": "reicon:hashtag-duotone",
	});
}

export default Component;
