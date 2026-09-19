import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jllyhjbpq.css';
import '../../css/v/vnov31bpx.css';
import '../../css/y/yst-xparl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="jllyhjbpq"/><path class="vnov31bpx"/><path class="yst-xparl"/></g>`,
		"fallback": "icon-park:flip-horizontally",
	});
}

export default Component;
