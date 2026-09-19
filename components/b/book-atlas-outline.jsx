import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xs-u7yzzn.css';
import '../../css/x/x-5hy_bas.css';
import '../../css/w/whpix6b2m.css';
import '../../css/n/n6dololes.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xs-u7yzzn"/><path class="x-5hy_bas"/><path class="whpix6b2m"/><path class="n6dololes"/></g>`,
		"fallback": "glyphs:book-atlas-outline",
	});
}

export default Component;
