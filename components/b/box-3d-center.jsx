import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lecpydg2p.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/h/h67o_cchx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lecpydg2p"/><path class="kpsn8jbjf"/><path class="h67o_cchx"/></g>`,
		"fallback": "iconoir:box-3d-center",
	});
}

export default Component;
