import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w_trteulp.css';
import '../../css/e/er4vg3bzc.css';
import '../../css/i/iw2rq42jc.css';
import '../../css/g/g6ky-mbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w_trteulp"/><path class="er4vg3bzc"/><path class="iw2rq42jc"/><path class="g6ky-mbfi"/></g>`,
		"fallback": "token:clave",
	});
}

export default Component;
