import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdw4w6evj.css';
import '../../css/x/xn1pz4iuf.css';
import '../../css/w/w9gsb7blj.css';
import '../../css/h/h1e1mnb1c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdw4w6evj"/><path class="xn1pz4iuf"/><path class="w9gsb7blj"/><path class="h1e1mnb1c"/>`,
		"fallback": "energy-icons:clover-20-bold",
	});
}

export default Component;
