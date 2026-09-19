import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkcgcxhua.css';
import '../../css/e/ei3k_tb3o.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rkcgcxhua"/><path class="ei3k_tb3o"/><path class="tlhsqgbia"/></g>`,
		"fallback": "hugeicons:file-yen",
	});
}

export default Component;
