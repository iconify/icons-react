import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t5td6567i.css';
import '../../css/u/ukpwpb_ld.css';
import '../../css/k/k0fv9gfqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="t5td6567i"/><path class="ukpwpb_ld"/><path class="k0fv9gfqt"/></g>`,
		"fallback": "matita:file-x",
	});
}

export default Component;
