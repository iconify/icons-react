import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n77s3abja.css';
import '../../css/c/czm0kmb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n77s3abja"/><path class="czm0kmb2d"/></g>`,
		"fallback": "keyline-icons:baby-boy-sharp-duotone",
	});
}

export default Component;
