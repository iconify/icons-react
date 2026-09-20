import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bneat_bfb.css';
import '../../css/e/erad_ystc.css';
import '../../css/b/bpvvrccfu.css';
import '../../css/l/l6dak_7zy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bneat_bfb"/><path class="erad_ystc"/><path class="bpvvrccfu"/><path class="l6dak_7zy"/></g>`,
		"fallback": "streamline-color:bug",
	});
}

export default Component;
