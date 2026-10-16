import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub-einb7l.css';
import '../../css/w/w73ky16tg.css';
import '../../css/m/m851t0cxs.css';
import '../../css/x/x6bsj-bei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub-einb7l"/><path class="w73ky16tg"/><path class="m851t0cxs"/><path class="x6bsj-bei"/>`,
		"fallback": "energy-icons:battery-cycle-20",
	});
}

export default Component;
