import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2jl4nb0t.css';
import '../../css/z/zikzdnbwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2jl4nb0t"/><path class="zikzdnbwk"/>`,
		"fallback": "energy-icons:brine-pond-20",
	});
}

export default Component;
