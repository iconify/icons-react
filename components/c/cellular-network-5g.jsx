import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n9z1r6vko.css';
import '../../css/c/cqqjrobdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n9z1r6vko"/><path class="cqqjrobdb"/></g>`,
		"fallback": "streamline-sharp:cellular-network-5g",
	});
}

export default Component;
