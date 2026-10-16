import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz93yvfkk.css';
import '../../css/w/wgr1h7bfy.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz93yvfkk"/><path class="wgr1h7bfy"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:industrial-boiler-20-bold",
	});
}

export default Component;
