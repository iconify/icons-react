import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2rq36bvg.css';
import '../../css/m/mzvqb-b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2rq36bvg"/><path class="mzvqb-b0r"/>`,
		"fallback": "octicon:dice-24",
	});
}

export default Component;
