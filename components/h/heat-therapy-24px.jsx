import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo5fttb-r.css';
import '../../css/g/go5k__bal.css';
import '../../css/j/jh2-g0auj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jo5fttb-r"/><path class="go5k__bal"/><path class="jh2-g0auj"/></g>`,
		"fallback": "healthicons:heat-therapy-24px",
	});
}

export default Component;
