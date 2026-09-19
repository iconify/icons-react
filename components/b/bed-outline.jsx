import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nffuxgb0d.css';
import '../../css/i/idjsc19lu.css';
import '../../css/j/jgg0-yb6i.css';
import '../../css/j/jz2ddmbaj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nffuxgb0d"/><path class="idjsc19lu"/><path class="jgg0-yb6i"/><path class="jz2ddmbaj"/></g>`,
		"fallback": "glyphs:bed-outline",
	});
}

export default Component;
