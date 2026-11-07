import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aumllf_ot.css';
import '../../css/a/aumyzgb9f.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/b0rzzdbxc.css';
import '../../css/a/a_egs8b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aumllf_ot"/><path class="aumyzgb9f"/><g class="xtpeb-edw"><path class="b0rzzdbxc"/><path class="a_egs8b1e"/></g>`,
		"fallback": "solar:chart-2-bold-duotone",
	});
}

export default Component;
