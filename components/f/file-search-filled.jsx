import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7kitb.css';
import '../../css/t/t5pxry.css';
import '../../css/q/q5vxhp.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-62.css';
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
		"content": `<defs><mask id="SVGdXoEbuTb"><path class="j7kitb t5pxry"/><path class="q5vxhp t5pxry"/></mask></defs><path mask="url(#SVGdXoEbuTb)" class="botfzx"/>`,
		"fallback": "line-md:file-search-filled",
	});
}

export default Component;
