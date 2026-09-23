import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rq1ab1rwz.css';
import '../../css/z/zwf05wbdd.css';
import '../../css/m/m9umjn1fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rq1ab1rwz"/><path class="zwf05wbdd"/><path class="m9umjn1fz"/></g>`,
		"fallback": "keyline-icons:cloud-sparkles-sharp-duotone",
	});
}

export default Component;
