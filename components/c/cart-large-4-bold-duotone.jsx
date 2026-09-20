import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7z01va1a.css';
import '../../css/k/kvl8uc5on.css';
import '../../css/m/m4cyfpbci.css';
import '../../css/m/mguo27ihz.css';
import '../../css/r/rogzy4bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7z01va1a"/><path class="kvl8uc5on"/><path class="m4cyfpbci"/><path class="mguo27ihz"/><path class="rogzy4bpl"/></g>`,
		"fallback": "solar:cart-large-4-bold-duotone",
	});
}

export default Component;
