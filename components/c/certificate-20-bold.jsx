import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7n374tg.css';
import '../../css/a/aouq01bvp.css';
import '../../css/m/mzeei2eeo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7n374tg"/><path class="aouq01bvp"/><path class="mzeei2eeo"/>`,
		"fallback": "energy-icons:certificate-20-bold",
	});
}

export default Component;
