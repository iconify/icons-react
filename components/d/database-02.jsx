import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/t/trlth4bch.css';
import '../../css/n/nf1dv4jjz.css';
import '../../css/i/io8in3baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="h_l78yaxm"/><path class="trlth4bch"/><path class="nf1dv4jjz"/><path class="io8in3baq"/></g>`,
		"fallback": "hugeicons:database-02",
	});
}

export default Component;
