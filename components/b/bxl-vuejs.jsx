import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atyg_au2t.css';
import '../../css/p/pf0hmharv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atyg_au2t"/><path class="pf0hmharv"/>`,
		"fallback": "bx:bxl-vuejs",
	});
}

export default Component;
