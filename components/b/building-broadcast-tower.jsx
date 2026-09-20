import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/z/z30hp2b8b.css';
import '../../css/h/h54pu9kvv.css';
import '../../css/v/vdz_6ebrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="z30hp2b8b"/><path class="h54pu9kvv"/><path class="vdz_6ebrd"/></g>`,
		"fallback": "tabler:building-broadcast-tower",
	});
}

export default Component;
