import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkjebkkrm.css';
import '../../css/x/xsu2qyb6y.css';
import '../../css/h/hy9onbbxk.css';
import '../../css/a/aqv759fpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkjebkkrm"/><path class="xsu2qyb6y"/><path class="hy9onbbxk"/><path class="aqv759fpb"/></g>`,
		"fallback": "lucide-extended:files-duotone",
	});
}

export default Component;
