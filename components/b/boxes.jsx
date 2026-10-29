import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hjujcunus.css';
import '../../css/u/umylw3b7l.css';
import '../../css/y/y7q2lbcuk.css';
import '../../css/a/auso9g4xh.css';
import '../../css/p/pzornbbvo.css';
import '../../css/b/be9i2m4ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hjujcunus wm-shadow"/><path class="umylw3b7l"/><path class="y7q2lbcuk"/><path class="auso9g4xh"/><path class="pzornbbvo"/><path class="be9i2m4ok wm-deco"/></g>`,
		"fallback": "withicons-sticker:boxes",
	});
}

export default Component;
