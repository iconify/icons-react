import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iqd92gbcg.css';
import '../../css/h/hhza2sb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iqd92gbcg"/><path class="hhza2sb8w"/></g>`,
		"fallback": "hugeicons:hierarchy-circle-01",
	});
}

export default Component;
