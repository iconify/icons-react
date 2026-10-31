import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pswta5bde.css';
import '../../css/o/olxsmqbop.css';
import '../../css/m/mqeul_bkb.css';
import '../../css/q/q4i_g-83q.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pswta5bde"/><path class="olxsmqbop"/><path class="mqeul_bkb"/><path class="q4i_g-83q"/>`,
		"fallback": "tabler-flags:cocos-keeling-islands",
	});
}

export default Component;
