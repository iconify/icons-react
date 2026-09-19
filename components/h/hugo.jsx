import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vf1cscb_g.css';
import '../../css/n/njyfnbcig.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vf1cscb_g"/><path class="njyfnbcig"/></g>`,
		"fallback": "catppuccin:hugo",
	});
}

export default Component;
