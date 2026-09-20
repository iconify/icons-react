import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b7rsv8bsq.css';
import '../../css/z/zsx854zmy.css';
import '../../css/i/i218wghxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b7rsv8bsq"/><path class="zsx854zmy"/><path class="i218wghxk"/></g>`,
		"fallback": "reicon:bicycle-filled",
	});
}

export default Component;
