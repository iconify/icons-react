import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siao_abdn.css';
import '../../css/h/h1bx1sgau.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siao_abdn"/><path class="h1bx1sgau"/>`,
		"fallback": "devicon:harvester-wordmark",
	});
}

export default Component;
