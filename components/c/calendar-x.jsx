import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/b/bsutkt59h.css';
import '../../css/s/s2wxl-cvv.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="bsutkt59h"/><path class="s2wxl-cvv"/><path class="kcxerzzzs wm-shine"/><path class="ho1yev95w wm-deco"/></g>`,
		"fallback": "withicons-sticker:calendar-x",
	});
}

export default Component;
