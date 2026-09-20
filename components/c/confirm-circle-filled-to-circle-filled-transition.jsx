import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8wpfy.css';
import '../../css/t/t5pxry.css';
import '../../css/f/fb-lrs.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmTAR7Qud"><path class="p8wpfy t5pxry"/><path class="fb-lrs t5pxry"/></mask></defs><path mask="url(#SVGmTAR7Qud)" class="botfzx"/>`,
		"fallback": "line-md:confirm-circle-filled-to-circle-filled-transition",
	});
}

export default Component;
