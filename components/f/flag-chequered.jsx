import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdilbsbas.css';
import '../../css/z/z05git9xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdilbsbas"/><path class="z05git9xa"/>`,
		"fallback": "boxicons:flag-chequered",
	});
}

export default Component;
