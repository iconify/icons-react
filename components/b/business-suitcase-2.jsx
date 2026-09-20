import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/q5fx5ibab.css';
import '../../css/n/n7ur55e1b.css';
import '../../css/d/d_0fwiz7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="q5fx5ibab"/><path class="n7ur55e1b"/><path class="d_0fwiz7o"/></g>`,
		"fallback": "streamline-cyber:business-suitcase-2",
	});
}

export default Component;
