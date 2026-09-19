import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vspo5bcgy.css';
import '../../css/y/y-_f44gxf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vspo5bcgy"/><path class="y-_f44gxf"/></g>`,
		"fallback": "glyphs:arrows-expand-quad-outline",
	});
}

export default Component;
