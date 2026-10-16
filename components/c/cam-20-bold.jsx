import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7hh0ng0w.css';
import '../../css/c/cdujlmbca.css';
import '../../css/t/tpz02j0hz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7hh0ng0w"/><path class="cdujlmbca"/><path class="tpz02j0hz"/>`,
		"fallback": "energy-icons:cam-20-bold",
	});
}

export default Component;
