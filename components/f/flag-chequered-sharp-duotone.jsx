import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dcm7c4dqi.css';
import '../../css/o/ol5dwea6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dcm7c4dqi"/><path class="ol5dwea6c"/></g>`,
		"fallback": "keyline-icons:flag-chequered-sharp-duotone",
	});
}

export default Component;
