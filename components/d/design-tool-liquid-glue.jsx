import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s1t9m15yr.css';
import '../../css/m/me3i_bcpu.css';
import '../../css/r/r-70unbaw.css';
import '../../css/i/itz0iqxco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s1t9m15yr"/><path class="me3i_bcpu"/><path class="r-70unbaw"/><path class="itz0iqxco"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-liquid-glue",
	});
}

export default Component;
