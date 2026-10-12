import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ln2zh__qu.css';
import '../../css/y/yoxqbccrx.css';
import '../../css/p/p_pkcwtbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ln2zh__qu"/><path class="yoxqbccrx"/><path class="p_pkcwtbw"/></g>`,
		"fallback": "andrsrxn:glasses",
	});
}

export default Component;
