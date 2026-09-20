import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyx2zp.css';
import '../../css/t/t5pxry.css';
import '../../css/u/u7rb2p.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIeDYc1Gq"><path class="pyx2zp t5pxry"/><path class="t5pxry u7rb2p"/></mask></defs><path mask="url(#SVGIeDYc1Gq)" class="botfzx"/>`,
		"fallback": "line-md:confirm-circle-filled",
	});
}

export default Component;
