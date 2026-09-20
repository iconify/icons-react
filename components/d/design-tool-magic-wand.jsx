import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/ww2quybza.css';
import '../../css/l/loiscdcpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ww2quybza"/><path class="loiscdcpm"/></g>`,
		"fallback": "streamline-freehand:design-tool-magic-wand",
	});
}

export default Component;
