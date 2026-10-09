import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywju0hn3b.css';
import '../../css/l/lytqpepod.css';
import '../../css/o/ortt9nb3x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywju0hn3b"/><path class="lytqpepod"/><path class="ortt9nb3x"/>`,
		"fallback": "energy-icons:first-aid-20",
	});
}

export default Component;
