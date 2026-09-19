import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jkf_3mbfp.css';
import '../../css/t/tvnbxhb2o.css';
import '../../css/h/hb-wj9-hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jkf_3mbfp"/><path class="tvnbxhb2o"/><path class="hb-wj9-hh"/></g>`,
		"fallback": "hugeicons:blockchain-06",
	});
}

export default Component;
