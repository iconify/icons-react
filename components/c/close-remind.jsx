import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk5t_ojsa.css';
import '../../css/w/wul7eor8q.css';
import '../../css/r/r46gmxbij.css';
import '../../css/z/z1tcktbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bk5t_ojsa"/><path class="wul7eor8q"/><path clip-rule="evenodd" class="r46gmxbij"/><path class="z1tcktbai"/></g>`,
		"fallback": "icon-park-outline:close-remind",
	});
}

export default Component;
