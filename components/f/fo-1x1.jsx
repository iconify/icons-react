import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy6v7eb4r.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/x/xdic9xigr.css';
import '../../css/u/u3h0sfbgw.css';
import '../../css/e/erpbjfjed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="sx_geyq0r"><path class="xdic9xigr"/><path class="u3h0sfbgw"/><path class="erpbjfjed"/></g>`,
		"fallback": "flag:fo-1x1",
	});
}

export default Component;
