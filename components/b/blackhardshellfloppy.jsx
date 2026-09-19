import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1a4_5bhx.css';
import '../../css/f/f0n61bjwo.css';
import '../../css/r/rdndzccdo.css';
import '../../css/v/vpbsv_3oy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1a4_5bhx"/><path class="f0n61bjwo"/><path class="rdndzccdo"/><path class="vpbsv_3oy"/>`,
		"fallback": "fxemoji:blackhardshellfloppy",
	});
}

export default Component;
