import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pop1r84gz.css';
import '../../css/s/sk_90x-pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pop1r84gz"/><path class="sk_90x-pv"/></g>`,
		"fallback": "hugeicons:file-attachment",
	});
}

export default Component;
