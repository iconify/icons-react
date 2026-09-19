import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnym-b5im.css';
import '../../css/t/t15jjd-vi.css';
import '../../css/l/l71ep0bsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnym-b5im"/><path class="t15jjd-vi"/><path class="l71ep0bsf"/></g>`,
		"fallback": "at-icons:baseball",
	});
}

export default Component;
