import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/in-rbubht.css';
import '../../css/d/d5g7v93rt.css';
import '../../css/m/m8-ll6bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="in-rbubht"/><path class="d5g7v93rt"/><path class="m8-ll6bmx"/></g>`,
		"fallback": "thesvg:akashchat",
	});
}

export default Component;
