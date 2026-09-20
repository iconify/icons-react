import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tg2bgx4fn.css';
import '../../css/d/d3jm4pouy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tg2bgx4fn"/><path class="d3jm4pouy"/></g>`,
		"fallback": "keyline-icons:folder-zip-sharp-two-tone",
	});
}

export default Component;
