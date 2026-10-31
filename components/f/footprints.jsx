import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zsm71cojq.css';
import '../../css/b/btawavbys.css';
import '../../css/h/ha-6yibsf.css';
import '../../css/k/k26yyvc5e.css';
import '../../css/n/ndax5gb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zsm71cojq"/><path class="btawavbys wm-shine"/><path class="ha-6yibsf wm-k"/><path class="k26yyvc5e wm-a"/><path class="ndax5gb4u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:footprints",
	});
}

export default Component;
