import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b94-ymbfh.css';
import '../../css/m/moj7sjbuz.css';
import '../../css/g/gwuluxuii.css';
import '../../css/i/iu_vqlblv.css';
import '../../css/c/cibcb4bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b94-ymbfh"/><path class="moj7sjbuz"/><path class="gwuluxuii"/><path class="iu_vqlblv"/><path class="cibcb4bcs"/></g>`,
		"fallback": "reicon:floor-lamp2-duotone",
	});
}

export default Component;
