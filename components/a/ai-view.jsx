import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jh10aebjc.css';
import '../../css/w/wo5yot8rw.css';
import '../../css/k/kz5dvk1mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jh10aebjc"/><path class="wo5yot8rw"/><path class="kz5dvk1mk"/></g>`,
		"fallback": "hugeicons:ai-view",
	});
}

export default Component;
