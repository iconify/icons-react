import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdfc7kbln.css';
import '../../css/p/plyl_b4bn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdfc7kbln"/><path class="plyl_b4bn"/>`,
		"fallback": "energy-icons:croissant-20",
	});
}

export default Component;
