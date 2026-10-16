import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvufwdbic.css';
import '../../css/r/r_u1-tb8p.css';
import '../../css/h/h8ej8rbod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvufwdbic"/><path class="r_u1-tb8p"/><path class="h8ej8rbod"/>`,
		"fallback": "energy-icons:cctv-20",
	});
}

export default Component;
