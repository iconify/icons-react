import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xnvg8so.css';
import '../../css/i/iw7kyb51l.css';
import '../../css/m/m37d-abet.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nnbvolc4c.css';
import '../../css/g/g74e2oluk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3xnvg8so"/><path class="iw7kyb51l"/><path clip-rule="evenodd" class="m37d-abet"/><g class="xtpeb-edw"><path class="nnbvolc4c"/><path class="g74e2oluk"/></g>`,
		"fallback": "solar:airbuds-left-bold-duotone",
	});
}

export default Component;
