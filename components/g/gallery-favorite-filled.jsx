import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8hfadckz.css';
import '../../css/a/a05xr_gmb.css';
import '../../css/g/ggxoisrbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b8hfadckz"/><path class="a05xr_gmb"/><path class="ggxoisrbh"/></g>`,
		"fallback": "reicon:gallery-favorite-filled",
	});
}

export default Component;
