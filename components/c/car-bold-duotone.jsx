import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/dpzlm9t1q.css';
import '../../css/o/ou7ezcjcq.css';
import '../../css/f/fnoitsnzo.css';
import '../../css/j/j7dyzlxlx.css';
import '../../css/a/a53pjbb-j.css';
import '../../css/z/zcaplciha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="dpzlm9t1q"/><path class="ou7ezcjcq"/><path class="fnoitsnzo"/><path class="j7dyzlxlx"/><path class="a53pjbb-j"/></g><path clip-rule="evenodd" class="zcaplciha"/>`,
		"fallback": "solar:car-bold-duotone",
	});
}

export default Component;
