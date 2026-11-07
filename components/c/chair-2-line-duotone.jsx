import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa4lx_b1x.css';
import '../../css/a/ahi--3boy.css';
import '../../css/a/axx9m59wr.css';
import '../../css/r/rfavqvugw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xa4lx_b1x"/><path class="ahi--3boy"/><path class="axx9m59wr"/><path class="rfavqvugw"/></g>`,
		"fallback": "solar:chair-2-line-duotone",
	});
}

export default Component;
