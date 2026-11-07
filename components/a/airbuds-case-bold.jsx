import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cng445bcg.css';
import '../../css/p/pzkg8kb5w.css';
import '../../css/t/t5jp7s4kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cng445bcg"/><path class="pzkg8kb5w"/><path class="t5jp7s4kx"/>`,
		"fallback": "solar:airbuds-case-bold",
	});
}

export default Component;
