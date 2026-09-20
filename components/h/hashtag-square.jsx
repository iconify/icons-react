import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gdbntwbnz.css';
import '../../css/f/fpv9x-b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gdbntwbnz"/><path class="fpv9x-b1e"/></g>`,
		"fallback": "reicon:hashtag-square",
	});
}

export default Component;
