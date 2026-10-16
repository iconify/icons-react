import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nczf9obkd.css';
import '../../css/c/c-s7-tb1l.css';
import '../../css/f/f3r1kpbwq.css';
import '../../css/d/dagi9acwx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nczf9obkd"/><path class="c-s7-tb1l"/><path class="f3r1kpbwq"/><path class="dagi9acwx"/>`,
		"fallback": "energy-icons:crimper-20-bold",
	});
}

export default Component;
