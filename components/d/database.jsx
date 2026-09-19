import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/a/a06nqacsr.css';
import '../../css/t/trlth4bch.css';
import '../../css/k/k_yyil5ms.css';
import '../../css/n/nf1dv4jjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="h_l78yaxm"/><path class="a06nqacsr"/><path class="trlth4bch"/><path class="k_yyil5ms"/><path class="nf1dv4jjz"/></g>`,
		"fallback": "hugeicons:database",
	});
}

export default Component;
