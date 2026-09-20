import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgyi9mbut.css';
import '../../css/g/gp1zudvuo.css';
import '../../css/w/wv0e5-xpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgyi9mbut"/><path class="gp1zudvuo"/><path class="wv0e5-xpg"/></g>`,
		"fallback": "streamline-freehand:database-network-1",
	});
}

export default Component;
