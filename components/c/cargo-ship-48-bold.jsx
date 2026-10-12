import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmx-vlbrm.css';
import '../../css/j/jjyg4db0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmx-vlbrm"/><path class="jjyg4db0j"/>`,
		"fallback": "energy-icons:cargo-ship-48-bold",
	});
}

export default Component;
