import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/n/n_9-3-bmz.css';
import '../../css/a/a_6ldbbip.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="n_9-3-bmz"/><path class="a_6ldbbip"/><path class="kcxerzzzs wm-shine"/><path class="joty_yrzs wm-deco"/></g>`,
		"fallback": "withicons-sticker:calendar-days",
	});
}

export default Component;
