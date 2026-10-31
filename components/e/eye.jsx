import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qoy7a5zoz.css';
import '../../css/i/iwg7_kb7o.css';
import '../../css/q/q64b23bbs.css';
import '../../css/o/oj_beqbbs.css';
import '../../css/v/v386zx6vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qoy7a5zoz wm-shadow"/><path class="iwg7_kb7o"/><path class="q64b23bbs"/><path class="oj_beqbbs"/><path class="v386zx6vc"/></g>`,
		"fallback": "withicons-retro:eye",
	});
}

export default Component;
