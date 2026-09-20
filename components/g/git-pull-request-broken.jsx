import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ixqjpwl1k.css';
import '../../css/x/xq0r2t84g.css';
import '../../css/p/pu5j3xbce.css';
import '../../css/a/a5g7hqbty.css';
import '../../css/f/f8m9b9b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ixqjpwl1k"/><path class="xq0r2t84g"/><path class="pu5j3xbce"/><path class="a5g7hqbty"/><path class="f8m9b9b9z"/></g>`,
		"fallback": "solar:git-pull-request-broken",
	});
}

export default Component;
