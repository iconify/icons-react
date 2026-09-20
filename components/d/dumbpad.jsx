import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_1ckzyh.css';
import '../../css/z/zo4u7dbqx.css';
import '../../css/e/egb1_lbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h9_1ckzyh"/><path class="zo4u7dbqx"/><path class="egb1_lbof"/>`,
		"fallback": "selfhst:dumbpad",
	});
}

export default Component;
