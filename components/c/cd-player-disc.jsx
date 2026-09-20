import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zjm05640w.css';
import '../../css/y/yyj7lus5v.css';
import '../../css/x/xnufaacac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zjm05640w"/><path class="yyj7lus5v"/><path class="xnufaacac"/></g>`,
		"fallback": "streamline-freehand:cd-player-disc",
	});
}

export default Component;
