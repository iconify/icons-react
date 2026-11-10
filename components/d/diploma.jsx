import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfie0_b0g.css';
import '../../css/b/blmc29b5u.css';
import '../../css/k/kpdxg0huz.css';
import '../../css/v/v5vsy-bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfie0_b0g"/><path class="blmc29b5u"/><path class="kpdxg0huz"/><path class="v5vsy-bcz"/></g>`,
		"fallback": "andrsrxn:diploma",
	});
}

export default Component;
