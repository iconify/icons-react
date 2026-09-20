import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja7ltjp0f.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btlxfkbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGeEBWIcGE" class="ja7ltjp0f"/></defs><g clip-rule="evenodd" class="n1lsf0bnc"><path class="btlxfkbwh"/><use href="#SVGeEBWIcGE"/><use href="#SVGeEBWIcGE"/></g>`,
		"fallback": "reicon:gallery-check",
	});
}

export default Component;
