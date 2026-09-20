import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gelqftbbq.css';
import '../../css/b/buckucclw.css';
import '../../css/d/dv996mu9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gelqftbbq"/><path class="buckucclw"/><path class="dv996mu9o"/></g>`,
		"fallback": "streamline-freehand-color:amusement-park-castle",
	});
}

export default Component;
