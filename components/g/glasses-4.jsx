import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jeo8ykbru.css';
import '../../css/c/c3dnsxw2w.css';
import '../../css/x/xcw8oz5tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jeo8ykbru"/><path class="c3dnsxw2w"/><path class="xcw8oz5tq"/></g>`,
		"fallback": "streamline-cyber-color:glasses-4",
	});
}

export default Component;
