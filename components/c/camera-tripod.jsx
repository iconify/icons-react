import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rrywltb8x.css';
import '../../css/f/fvkou_blp.css';
import '../../css/m/mqv_efbrz.css';
import '../../css/e/ehdbkmzid.css';
import '../../css/h/h-u-zdb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rrywltb8x"/><path class="fvkou_blp"/><path class="mqv_efbrz"/><path class="ehdbkmzid"/><path class="h-u-zdb0i"/></g>`,
		"fallback": "streamline-freehand-color:camera-tripod",
	});
}

export default Component;
