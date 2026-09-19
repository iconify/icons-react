import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uf_3yubea.css';
import '../../css/z/z59xi4--h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uf_3yubea"/><path class="z59xi4--h"/></g>`,
		"fallback": "hugeicons:bank",
	});
}

export default Component;
