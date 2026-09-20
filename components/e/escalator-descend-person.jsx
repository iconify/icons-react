import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dz9yombbv.css';
import '../../css/a/ad2e8e19u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dz9yombbv"/><path class="ad2e8e19u"/></g>`,
		"fallback": "streamline-freehand:escalator-descend-person",
	});
}

export default Component;
