import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-40i3b7x.css';
import '../../css/i/i4us9_bhu.css';
import '../../css/o/op6fncb7i.css';
import '../../css/j/j7cxyrbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-40i3b7x"/><path class="i4us9_bhu"/><path class="op6fncb7i"/><path class="j7cxyrbtf"/></g>`,
		"fallback": "lucide-extended:git-pull-request-create-arrow-duotone",
	});
}

export default Component;
