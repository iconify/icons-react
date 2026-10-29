import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f7sohgbqm.css';
import '../../css/z/z4uy344vo.css';
import '../../css/t/tvafuqbta.css';
import '../../css/t/tfj9tmbgt.css';
import '../../css/y/yfmwx7fzu.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="f7sohgbqm wm-shadow"/><path class="z4uy344vo"/><path class="tvafuqbta"/><path class="tfj9tmbgt"/><path class="wm-shine yfmwx7fzu"/><path class="sjgcrcdjv wm-deco"/></g>`,
		"fallback": "withicons-sticker:circle-dashed",
	});
}

export default Component;
