import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/oia1wqbzb.css';
import '../../css/s/sk-16rb1i.css';
import '../../css/z/zrb6xobrg.css';
import '../../css/o/oxjwpqn3d.css';
import '../../css/t/t_kg827bk.css';
import '../../css/l/lgaj05f-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="oia1wqbzb"/><path class="sk-16rb1i"/><path class="zrb6xobrg"/><path class="oxjwpqn3d"/><path class="t_kg827bk"/><path class="lgaj05f-w"/></g>`,
		"fallback": "matita:git-pull-request",
	});
}

export default Component;
