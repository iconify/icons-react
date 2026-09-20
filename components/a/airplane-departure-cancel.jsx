import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qgjwlubuy.css';
import '../../css/f/f7h-ipb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="qgjwlubuy"/><path class="f7h-ipb1d"/></g>`,
		"fallback": "streamline-cyber:airplane-departure-cancel",
	});
}

export default Component;
