import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdqlpxbtz.css';
import '../../css/x/x4o5qsbyx.css';
import '../../css/n/nnute1z7l.css';
import '../../css/w/wtyigqbwe.css';
import '../../css/v/vuchhrbdc.css';
import '../../css/v/vdrkvnb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdqlpxbtz"/><path class="x4o5qsbyx"/><path class="nnute1z7l"/><path class="wtyigqbwe"/><path class="vuchhrbdc"/><path class="vdrkvnb8h"/></g>`,
		"fallback": "streamline-cyber-color:delivery-package-2",
	});
}

export default Component;
