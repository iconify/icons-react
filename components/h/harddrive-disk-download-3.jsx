import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm26z0bbm.css';
import '../../css/s/s-bqbjbdh.css';
import '../../css/i/i6lqbg00h.css';
import '../../css/i/iat1-6b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qm26z0bbm"/><path class="s-bqbjbdh"/><path class="i6lqbg00h"/><path class="iat1-6b6t"/></g>`,
		"fallback": "streamline-cyber-color:harddrive-disk-download-3",
	});
}

export default Component;
