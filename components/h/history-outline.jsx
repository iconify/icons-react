import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ef8pwpb6n.css';
import '../../css/s/sleouwb3s.css';
import '../../css/w/w-asugb8r.css';
import '../../css/e/elikaogpc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ef8pwpb6n"/><path class="sleouwb3s"/><path class="w-asugb8r"/><path class="elikaogpc"/></g>`,
		"fallback": "glyphs:history-outline",
	});
}

export default Component;
