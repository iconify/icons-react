import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anhhz7k0l.css';
import '../../css/t/tmt5_jlxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anhhz7k0l"/><path class="tmt5_jlxd"/>`,
		"fallback": "energy-icons:fries-20-bold",
	});
}

export default Component;
