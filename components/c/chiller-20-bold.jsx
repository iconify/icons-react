import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4rxj1pug.css';
import '../../css/y/yi7of_udj.css';
import '../../css/z/zrehoxbbg.css';
import '../../css/w/wmrno8bgk.css';
import '../../css/i/ibkh1gf4v.css';
import '../../css/o/oe09lqh_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4rxj1pug"/><path class="yi7of_udj"/><path class="zrehoxbbg"/><path class="wmrno8bgk"/><path class="ibkh1gf4v"/><path class="oe09lqh_m"/>`,
		"fallback": "energy-icons:chiller-20-bold",
	});
}

export default Component;
