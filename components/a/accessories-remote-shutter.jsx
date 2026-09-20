import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m58ggcg7w.css';
import '../../css/a/aibz0obnx.css';
import '../../css/o/obrj8v2ee.css';
import '../../css/r/ryi58rzir.css';
import '../../css/h/hg229cc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m58ggcg7w"/><path class="aibz0obnx"/><path class="obrj8v2ee"/><path class="ryi58rzir"/><path class="hg229cc5p"/></g>`,
		"fallback": "streamline-freehand-color:accessories-remote-shutter",
	});
}

export default Component;
