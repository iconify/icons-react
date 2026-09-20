import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/i/ixqjpwl1k.css';
import '../../css/d/dqxu8_mcp.css';
import '../../css/p/pu5j3xbce.css';
import '../../css/j/jnaj9-8_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="ixqjpwl1k"/><path class="dqxu8_mcp"/><path class="pu5j3xbce"/><path class="jnaj9-8_f"/></g>`,
		"fallback": "solar:git-pull-request-line-duotone",
	});
}

export default Component;
