import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt7fksspz.css';
import '../../css/x/xw5kczn2n.css';
import '../../css/h/hee4znb9f.css';
import '../../css/l/lq3_85bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wt7fksspz"/><path class="xw5kczn2n"/><path class="hee4znb9f"/><path class="lq3_85bzj"/></g>`,
		"fallback": "andrsrxn:folder-history",
	});
}

export default Component;
