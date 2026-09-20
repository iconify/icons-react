import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ao886xbhl.css';
import '../../css/k/ktjgtobmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ao886xbhl"/><path class="ktjgtobmc"/></g>`,
		"fallback": "streamline-freehand:email-action-download",
	});
}

export default Component;
