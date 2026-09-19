import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/droj9cnwk.css';
import '../../css/i/iydim6b0y.css';
import '../../css/a/a-u-nibzd.css';
import '../../css/m/mdfog5bdc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="droj9cnwk"/><path class="iydim6b0y"/><path class="a-u-nibzd"/><path class="mdfog5bdc"/></g>`,
		"fallback": "glyphs:apple-outline",
	});
}

export default Component;
