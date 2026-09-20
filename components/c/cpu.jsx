import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hqaiz9bbn.css';
import '../../css/i/iutt_t9mp.css';
import '../../css/r/r124wd01y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hqaiz9bbn"/><path class="iutt_t9mp"/><path class="r124wd01y"/></g>`,
		"fallback": "marketeq:cpu",
	});
}

export default Component;
