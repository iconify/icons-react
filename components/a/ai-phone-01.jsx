import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwgenphdo.css';
import '../../css/k/kx3xj_byv.css';
import '../../css/p/pzqwhpb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wwgenphdo"/><path class="kx3xj_byv"/><path class="pzqwhpb0i"/></g>`,
		"fallback": "hugeicons:ai-phone-01",
	});
}

export default Component;
