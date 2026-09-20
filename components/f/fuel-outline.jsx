import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wys7w1s4z.css';
import '../../css/y/yrlw-cbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wys7w1s4z"/><path class="yrlw-cbft"/></g>`,
		"fallback": "solar:fuel-outline",
	});
}

export default Component;
