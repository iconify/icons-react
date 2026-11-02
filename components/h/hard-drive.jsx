import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h5bwgp51v.css';
import '../../css/f/fk47cqb8t.css';
import '../../css/h/hhf1ftb3e.css';
import '../../css/p/p-3p33b6l.css';
import '../../css/z/zasvzr6jc.css';
import '../../css/z/zwjj__2ay.css';
import '../../css/b/bnaykwomo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h5bwgp51v"/><path class="fk47cqb8t"/><path class="hhf1ftb3e"/><path class="p-3p33b6l"/><path class="zasvzr6jc"/><path class="zwjj__2ay"/><path class="bnaykwomo"/></g>`,
		"fallback": "matita:hard-drive",
	});
}

export default Component;
