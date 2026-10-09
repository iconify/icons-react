import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf44fsf2t.css';
import '../../css/f/fy0c3cbja.css';
import '../../css/o/op21zq27n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf44fsf2t"/><path class="fy0c3cbja"/><path class="op21zq27n"/>`,
		"fallback": "energy-icons:charger-slow-48-bold",
	});
}

export default Component;
