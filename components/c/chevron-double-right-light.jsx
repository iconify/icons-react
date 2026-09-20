import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmkispbpe.css';
import '../../css/m/mckxhb0sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mmkispbpe"/><path class="mckxhb0sx"/></g>`,
		"fallback": "stash:chevron-double-right-light",
	});
}

export default Component;
