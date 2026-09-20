import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etbq9abyx.css';
import '../../css/a/avfj2roso.css';
import '../../css/n/nrjfxccnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="etbq9abyx"/><path class="avfj2roso"/><path class="nrjfxccnf"/></g>`,
		"fallback": "streamline-cyber-color:cursor-2",
	});
}

export default Component;
