import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wojb86weh.css';
import '../../css/j/jlp2h3dkt.css';
import '../../css/a/a2fw7nbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wojb86weh"/><path class="jlp2h3dkt"/><path class="a2fw7nbgb"/></g>`,
		"fallback": "solar:folder-sync-linear",
	});
}

export default Component;
