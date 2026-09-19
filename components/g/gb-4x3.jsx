import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk6pn2brg.css';
import '../../css/q/qk5jxxbpp.css';
import '../../css/p/pb9imdbxu.css';
import '../../css/u/u_g0ji_te.css';
import '../../css/h/hwmfjmbkc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk6pn2brg"/><path class="qk5jxxbpp"/><path class="pb9imdbxu"/><path class="u_g0ji_te"/><path class="hwmfjmbkc"/>`,
		"fallback": "flag:gb-4x3",
	});
}

export default Component;
