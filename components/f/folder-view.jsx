import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzrxlf1os.css';
import '../../css/g/gwncqhcpc.css';
import '../../css/u/ufugkktpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dzrxlf1os"/><path class="gwncqhcpc"/><path class="ufugkktpx"/></g>`,
		"fallback": "hugeicons:folder-view",
	});
}

export default Component;
