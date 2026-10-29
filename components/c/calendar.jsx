import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/n/nd2wmlbbp.css';
import '../../css/j/jtu6rmbup.css';
import '../../css/x/x-edljbui.css';
import '../../css/u/uvlxbpwvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="nd2wmlbbp"/><path class="jtu6rmbup"/><path class="wm-shine x-edljbui"/><path class="uvlxbpwvl wm-deco"/></g>`,
		"fallback": "withicons-sticker:calendar",
	});
}

export default Component;
