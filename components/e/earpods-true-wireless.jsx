import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ld2pio0ya.css';
import '../../css/f/f8euz0pvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ld2pio0ya"/><path class="f8euz0pvp"/></g>`,
		"fallback": "streamline-freehand:earpods-true-wireless",
	});
}

export default Component;
