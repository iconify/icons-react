import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apbrurnes.css';
import '../../css/l/l2l3occ7y.css';
import '../../css/v/v4zxefbzz.css';
import '../../css/b/bvfdvib1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="apbrurnes"/><path clip-rule="evenodd" class="l2l3occ7y"/><path class="v4zxefbzz"/><path clip-rule="evenodd" class="bvfdvib1w"/></g>`,
		"fallback": "healthicons:i-exam-qualification-outline",
	});
}

export default Component;
