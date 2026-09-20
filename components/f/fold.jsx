import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jocbzw1xx.css';
import '../../css/f/f9h36q24z.css';
import '../../css/e/ex0ms5b-c.css';
import '../../css/n/nepc0n-im.css';
import '../../css/d/doud3xbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jocbzw1xx"/><path class="f9h36q24z"/><path class="ex0ms5b-c"/><path class="nepc0n-im"/><path class="doud3xbeg"/>`,
		"fallback": "token:fold",
	});
}

export default Component;
