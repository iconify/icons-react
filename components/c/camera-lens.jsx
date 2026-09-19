import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g8qfvnbjm.css';
import '../../css/e/egfs-cciu.css';
import '../../css/z/zga1a2bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="g8qfvnbjm"/><circle class="egfs-cciu"/><path class="zga1a2bdz"/></g>`,
		"fallback": "hugeicons:camera-lens",
	});
}

export default Component;
