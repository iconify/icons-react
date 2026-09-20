import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pt1kjpbzv.css';
import '../../css/x/xqajvbbjd.css';
import '../../css/f/f06hpqbzb.css';
import '../../css/e/epa7lztpq.css';
import '../../css/r/r86mes41q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pt1kjpbzv"/><path class="xqajvbbjd"/><path class="f06hpqbzb"/><path class="epa7lztpq"/><path class="r86mes41q"/></g>`,
		"fallback": "streamline-logos:apple-ios-logo-1",
	});
}

export default Component;
