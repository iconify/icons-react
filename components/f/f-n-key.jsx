import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/w/w3ezambji.css';
import '../../css/t/t-i8bxbmj.css';
import '../../css/t/t-ukfjiuk.css';
import '../../css/j/j_kq8ujwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="w3ezambji"/><path class="t-i8bxbmj"/><path class="t-ukfjiuk"/><path class="j_kq8ujwj"/></g>`,
		"fallback": "icon-park:f-n-key",
	});
}

export default Component;
