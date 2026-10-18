import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwlbz_p1k.css';
import '../../css/z/zyzasuqld.css';
import '../../css/s/s-gqk9d9n.css';
import '../../css/l/lsdiztbxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwlbz_p1k"/><path class="zyzasuqld"/><path class="s-gqk9d9n"/><path class="lsdiztbxb"/>`,
		"fallback": "energy-icons:battery-cooling-20-bold",
	});
}

export default Component;
