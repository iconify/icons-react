import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ohtbcybba.css';
import '../../css/i/iqj-84gkn.css';
import '../../css/s/sp0fyfs-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ohtbcybba"/><path class="iqj-84gkn"/><path class="sp0fyfs-h"/></g>`,
		"fallback": "pepicons:code",
	});
}

export default Component;
