import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/agw-23bom.css';
import '../../css/f/fe7872tje.css';
import '../../css/r/rr58v-owm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3)" class="n1lsf0bnc"><path class="agw-23bom"/><ellipse class="fe7872tje"/><path class="rr58v-owm"/></g>`,
		"fallback": "si-glyph:globe",
	});
}

export default Component;
