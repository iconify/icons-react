import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nlnc4lq_a.css';
import '../../css/a/apq9kgbfl.css';
import '../../css/h/hejeu2b9w.css';
import '../../css/e/ehjbgt3zh.css';
import '../../css/v/ve9diubak.css';
import '../../css/b/b7fg--q9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nlnc4lq_a wm-shadow"/><path class="apq9kgbfl"/><path class="hejeu2b9w"/><path class="ehjbgt3zh"/><path class="ve9diubak wm-shine"/><path class="b7fg--q9c wm-deco"/></g>`,
		"fallback": "withicons-sticker:case-upper",
	});
}

export default Component;
