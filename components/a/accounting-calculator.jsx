import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ikl747bil.css';
import '../../css/o/ovuwqmcap.css';
import '../../css/d/dkb-t3bph.css';
import '../../css/z/znhoneb8n.css';
import '../../css/a/as5ptpbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ikl747bil"/><path class="ovuwqmcap"/><path class="dkb-t3bph"/><path class="znhoneb8n"/><path class="as5ptpbfk"/></g>`,
		"fallback": "streamline-freehand-color:accounting-calculator",
	});
}

export default Component;
