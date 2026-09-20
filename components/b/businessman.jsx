import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wlpepoc1f.css';
import '../../css/d/d3ws0udmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wlpepoc1f"/><path class="d3ws0udmd"/></g>`,
		"fallback": "streamline-cyber:businessman",
	});
}

export default Component;
