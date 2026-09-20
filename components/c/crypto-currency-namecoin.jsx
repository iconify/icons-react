import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6p0h2rje.css';
import '../../css/n/nhasnebxq.css';
import '../../css/s/skg-anb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q6p0h2rje"/><path class="nhasnebxq"/><path class="skg-anb7u"/></g>`,
		"fallback": "streamline-ultimate-color:crypto-currency-namecoin",
	});
}

export default Component;
