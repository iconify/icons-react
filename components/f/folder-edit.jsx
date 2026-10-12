import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_5fivbtu.css';
import '../../css/s/shwczoibt.css';
import '../../css/s/sr7bhxcfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_5fivbtu"/><rect transform="rotate(135 7 12.58)scale(-1 1)" class="shwczoibt"/><path class="sr7bhxcfq"/></g>`,
		"fallback": "andrsrxn:folder-edit",
	});
}

export default Component;
