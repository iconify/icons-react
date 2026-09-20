import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxo7keb8z.css';
import '../../css/n/nqdxo0gwd.css';
import '../../css/m/mk3him89g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxo7keb8z"/><path class="nqdxo0gwd"/><path class="mk3him89g"/></g>`,
		"fallback": "streamline-color:bank",
	});
}

export default Component;
