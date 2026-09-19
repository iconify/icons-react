import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjq3ac0dg.css';
import '../../css/i/ipjtrphds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjq3ac0dg"/><path class="ipjtrphds"/>`,
		"fallback": "boxicons:building",
	});
}

export default Component;
