import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/b3tg1bi3m.css';
import '../../css/h/hwwubw2ud.css';
import '../../css/o/o6g7n3blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="b3tg1bi3m"/><path class="hwwubw2ud"/><path class="o6g7n3blk"/></g>`,
		"fallback": "lets-icons:direction-alt-3-light",
	});
}

export default Component;
