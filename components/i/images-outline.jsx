import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m04wr6bxv.css';
import '../../css/h/h3e1u3zis.css';
import '../../css/i/i3c4jibtn.css';
import '../../css/x/xcv5olncc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m04wr6bxv"/><path class="h3e1u3zis"/><path class="i3c4jibtn"/><path class="xcv5olncc"/></g>`,
		"fallback": "glyphs:images-outline",
	});
}

export default Component;
