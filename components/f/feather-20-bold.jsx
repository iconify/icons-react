import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1rxiyxan.css';
import '../../css/b/b0cpgnbfh.css';
import '../../css/j/jl8htv4va.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1rxiyxan"/><path class="b0cpgnbfh"/><path class="jl8htv4va"/>`,
		"fallback": "energy-icons:feather-20-bold",
	});
}

export default Component;
