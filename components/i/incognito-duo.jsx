import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bktfewj-q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lpxkeb6wa.css';
import '../../css/i/ikcx5dxqo.css';
import '../../css/l/l9qsn4rxr.css';
import '../../css/o/ow9pvz9jr.css';
import '../../css/u/uhc6nkbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bktfewj-q secondary"/><g class="dt0cm9dhy primary"><path class="lpxkeb6wa"/><path class="ikcx5dxqo"/><path class="l9qsn4rxr"/><path class="ow9pvz9jr"/><path class="uhc6nkbkn"/></g>`,
		"fallback": "iconaut:incognito-duo",
	});
}

export default Component;
