import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd1c6r6js.css';
import '../../css/w/w2m_ohw5p.css';
import '../../css/a/au8al9bwl.css';
import '../../css/b/b91nf-b_y.css';
import '../../css/r/rlh92bczv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nd1c6r6js"/><path class="w2m_ohw5p"/><circle class="au8al9bwl"/><path class="b91nf-b_y"/><path class="rlh92bczv"/></g>`,
		"fallback": "andrsrxn:dryer",
	});
}

export default Component;
