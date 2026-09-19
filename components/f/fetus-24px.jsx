import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fya1dfb5w.css';
import '../../css/k/kygivlpkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fya1dfb5w"/><path clip-rule="evenodd" class="kygivlpkv"/></g>`,
		"fallback": "healthicons:fetus-24px",
	});
}

export default Component;
