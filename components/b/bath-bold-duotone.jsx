import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0ejorlzz.css';
import '../../css/f/fwrzlbcrn.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lvkw2cbml.css';
import '../../css/f/f2qfvf6at.css';
import '../../css/o/oi1cgjbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0ejorlzz"/><path class="fwrzlbcrn"/><g class="xtpeb-edw"><path class="lvkw2cbml"/><path class="f2qfvf6at"/><path class="oi1cgjbfr"/></g>`,
		"fallback": "solar:bath-bold-duotone",
	});
}

export default Component;
