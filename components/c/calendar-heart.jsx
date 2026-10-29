import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/r/r0cqg6y6q.css';
import '../../css/a/a3q2eacvo.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/y/y5csqvbrl.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="r0cqg6y6q"/><path class="a3q2eacvo"/><path class="kcxerzzzs wm-shine"/><path class="wm-deco y5csqvbrl"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:calendar-heart",
	});
}

export default Component;
