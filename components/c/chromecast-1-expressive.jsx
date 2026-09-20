import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k8vjp8bic.css';
import '../../css/l/lb6lex7-t.css';
import '../../css/z/zlcpk-bqz.css';
import '../../css/j/jbbepsbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k8vjp8bic"/><path class="lb6lex7-t"/><path class="zlcpk-bqz"/><path class="jbbepsbec"/></g>`,
		"fallback": "nrk:chromecast-1-expressive",
	});
}

export default Component;
