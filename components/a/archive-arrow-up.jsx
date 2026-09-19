import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnkl-hfqz.css';
import '../../css/a/adejynbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bnkl-hfqz"/><path class="adejynbup"/></g>`,
		"fallback": "hugeicons:archive-arrow-up",
	});
}

export default Component;
