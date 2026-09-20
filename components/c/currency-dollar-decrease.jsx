import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wn0mrybgi.css';
import '../../css/f/fq5-7dbbn.css';
import '../../css/r/rj-q30x7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wn0mrybgi"/><path class="fq5-7dbbn"/><path class="rj-q30x7d"/></g>`,
		"fallback": "streamline-freehand-color:currency-dollar-decrease",
	});
}

export default Component;
