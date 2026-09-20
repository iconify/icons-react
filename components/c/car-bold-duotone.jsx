import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jcwot8b0q.css';
import '../../css/l/lnnq29boc.css';
import '../../css/f/fnoitsnzo.css';
import '../../css/j/j7dyzlxlx.css';
import '../../css/a/a53pjbb-j.css';
import '../../css/v/v09ng3b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="jcwot8b0q"/><path class="lnnq29boc"/><path class="fnoitsnzo"/><path class="j7dyzlxlx"/><path class="a53pjbb-j"/></g><path clip-rule="evenodd" class="v09ng3b3s"/></g>`,
		"fallback": "solar:car-bold-duotone",
	});
}

export default Component;
