import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqc3elbeh.css';
import '../../css/i/ih5nivq9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqc3elbeh"/><path class="ih5nivq9i"/>`,
		"fallback": "circum:circle-chev-up",
	});
}

export default Component;
