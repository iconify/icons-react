import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/al_n6-k_w.css';
import '../../css/x/xp85gbbjx.css';
import '../../css/i/iwpksfznp.css';
import '../../css/k/k7fijjb5q.css';
import '../../css/k/kk6vj4b0q.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="al_n6-k_w wm-shadow"/><path class="xp85gbbjx"/><path class="iwpksfznp"/><path class="k7fijjb5q"/><path class="kk6vj4b0q wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-up-left",
	});
}

export default Component;
