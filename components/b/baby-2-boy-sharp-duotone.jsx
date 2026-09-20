import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n77s3abja.css';
import '../../css/t/t11kj5rgv.css';
import '../../css/z/zbfc7cbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n77s3abja"/><path class="t11kj5rgv"/><path class="zbfc7cbxn"/></g>`,
		"fallback": "keyline-icons:baby-2-boy-sharp-duotone",
	});
}

export default Component;
