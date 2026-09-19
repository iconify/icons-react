import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tllrkkbnh.css';
import '../../css/l/lmg_p4bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tllrkkbnh"/><path class="lmg_p4bor"/></g>`,
		"fallback": "iconoir:adobe-lightroom",
	});
}

export default Component;
