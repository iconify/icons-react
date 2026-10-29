import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oa480xoob.css';
import '../../css/z/zc7cvea1c.css';
import '../../css/t/t-4ankb3t.css';
import '../../css/o/obvc3ve7q.css';
import '../../css/k/k7zassbqs.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="oa480xoob wm-shadow"/><path class="zc7cvea1c"/><path class="t-4ankb3t"/><path class="obvc3ve7q"/><path class="k7zassbqs wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`,
		"fallback": "withicons-sticker:chef-hat",
	});
}

export default Component;
