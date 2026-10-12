import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvnfybc2q.css';
import '../../css/t/tv82xdb3v.css';
import '../../css/b/bsjepvbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvnfybc2q"/><path class="tv82xdb3v"/><path class="bsjepvbyb"/></g>`,
		"fallback": "andrsrxn:certificate",
	});
}

export default Component;
