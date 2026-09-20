import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v4tcc1a3d.css';
import '../../css/a/a31k09bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v4tcc1a3d"/><path class="a31k09bcg"/></g>`,
		"fallback": "streamline-sharp:cloud-data-transfer",
	});
}

export default Component;
