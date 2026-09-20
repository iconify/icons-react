import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmop-ib2u.css';
import '../../css/g/gcsak2rrc.css';
import '../../css/o/olf4hhp5l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qmop-ib2u"/><path class="gcsak2rrc"/><path clip-rule="evenodd" class="olf4hhp5l"/></g>`,
		"fallback": "streamline-color:closet-flat",
	});
}

export default Component;
