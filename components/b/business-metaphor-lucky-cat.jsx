import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjccdsbql.css';
import '../../css/s/sqzg-pbzs.css';
import '../../css/d/dxs3hib_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjccdsbql"/><path class="sqzg-pbzs"/><path class="dxs3hib_h"/></g>`,
		"fallback": "streamline-freehand-color:business-metaphor-lucky-cat",
	});
}

export default Component;
