import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rsjxhzb4f.css';
import '../../css/i/ijf11_a_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rsjxhzb4f"/><path class="ijf11_a_i"/></g>`,
		"fallback": "streamline-cyber:download-2",
	});
}

export default Component;
