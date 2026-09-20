import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq4vqybvu.css';
import '../../css/l/lz_7e7xho.css';
import '../../css/u/uw1m4coxa.css';
import '../../css/j/jr4busbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq4vqybvu"/><path class="lz_7e7xho"/><path class="uw1m4coxa"/><path class="jr4busbft"/></g>`,
		"fallback": "streamline-cyber-color:cursor-scroll-2",
	});
}

export default Component;
